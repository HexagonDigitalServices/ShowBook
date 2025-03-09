import { useEffect, useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const Hero = ({ searchQuery }) => {

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
                        searchQuery
                    )}&maxResults=35&key=AIzaSyAtZxon2bKZvQUnvW-n1KSxScTAa9cLO3I`
                );
                if (!response.ok) throw new Error('Failed to fetch');
                const data = await response.json();

                const mappedBooks = data.items?.map(item => ({
                    id: item.id,
                    title: item.volumeInfo.title || 'Untitled',
                    authors: item.volumeInfo.authors?.join(', ') || 'Unknown Author',
                    categories: item.volumeInfo.categories?.join(', ') || 'General',
                    rating: item.volumeInfo.averageRating || 0,
                    pageCount: item.volumeInfo.pageCount || 'N/A',
                    printType: item.volumeInfo.printType || 'Unknown',
                    ratingsCount: item.volumeInfo.ratingsCount || 0,
                    imageUrl: item.volumeInfo.imageLinks?.thumbnail || '',
                    description: item.volumeInfo.description || '',
                    infoLink: item.volumeInfo.infoLink || '#',
                })) || [];


    const getPlaceholder = (title) => {
        return `data:image/svg+xml;utf8,${encodeURIComponent(
            `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="900" viewBox="0 0 600 900">
        <rect width="100%" height="100%" fill="#2D3748"/>
        <text x="50%" y="50%" fill="#4A5568" font-family="monospace" font-size="80" 
              text-anchor="middle" dominant-baseline="middle">${initials}</text>
      </svg>`
        )}`;
    };

export default Hero;
