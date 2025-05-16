'use client';

import { useEffect, useState, useCallback } from 'react';
import { useInfiniteQuery, type QueryFunctionContext } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import debounce from 'lodash.debounce';

import type { Product } from '@models/product';
import SearchInput from './search-input';
import SearchList from './search-list';
import SearchListSkeleton from './search-list-skeleton';

export default function SearchBoard() {
  // 입력창에 보여줄 바로 반응하는 상태
  const [inputValue, setInputValue] = useState('');
  // 디바운싱 적용할 검색 트리거 상태
  const [searchKeyword, setSearchKeyword] = useState('');

  const { ref, inView } = useInView();

  const fetchMovies = async ({ pageParam = 1, queryKey }: QueryFunctionContext<readonly unknown[]>) => {
    const keyword = queryKey[0];
    const url = `/api/search?q=${keyword}&page=${pageParam}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Failed to fetch');
    const data: Product[] = await res.json();
    return data;
  };

  // 검색 쿼리
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isPending } = useInfiniteQuery<
    Product[],
    Error
  >({
    queryKey: [searchKeyword],
    queryFn: fetchMovies,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
  });

  const movies = data?.pages.flat() ?? [];

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  // 디바운싱 적용용
  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setSearchKeyword(value.trim());
    }, 500), // 500ms
    [],
  );

  // input 입력 시 호출됨
  const handleChange = (value: string) => {
    setInputValue(value); // 입력값은 즉시 반영
    debouncedSearch(value); // 검색 트리거는 디바운스 처리
  };

  // 엔터 누르면 바로 검색 실행
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      debouncedSearch.cancel(); // 디바운싱 취소
      setSearchKeyword(inputValue); // 즉시 검색
    }
  };

  // 검색 아이콘 클릭 시 검색 실행
  const handleSearch = () => {
    debouncedSearch.cancel();
    setSearchKeyword(inputValue);
  };

  // 삭제 아이콘 클릭 시 검색창 및 결과 초기화
  const handleClear = () => {
    setInputValue('');
    setSearchKeyword('');
  };

  return (
    <div>
      <SearchInput
        keyword={inputValue}
        handleChange={handleChange}
        handleKeyDown={handleKeyDown}
        handleSearch={handleSearch}
        handleClear={handleClear}
      />
      <div className="text-headline-01 ml-2 pt-4 pb-4">Top Searches</div>
      {isPending || isLoading ? (
        <SearchListSkeleton />
      ) : (
        <div className="hide-scrollbar h-[631px] overflow-y-auto">
          <SearchList data={movies} />
          <div ref={ref}>{hasNextPage && <SearchListSkeleton />}</div>
        </div>
      )}
    </div>
  );
}
