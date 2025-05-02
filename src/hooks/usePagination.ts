import { useEffect, useState } from 'react'
import { Pokemon } from '@/@types/pokemon';

export const usePagination = (allItems: Pokemon [], pageSize: number) => {
    
    const [total, setTotal] = useState(allItems.length);
    const [numPages, setNumPages] = useState(Math.ceil(total / pageSize));
    const [currentPage, setCurrentpage] = useState(1);
    const [items, setItems] = useState<any>([]);

    useEffect(() => {;
        const pageItems = allItems.slice(((currentPage - 1) * pageSize), (pageSize * currentPage)); 
        setItems(pageItems);
    }, [currentPage]);

    const prevPage = () => {
        setCurrentpage(prev => prev - 1);
    }

    const nextPage = () => {
        setCurrentpage(prev => prev + 1);
    }
    
    return { items, numPages, currentPage, setCurrentpage, prevPage, nextPage }
}