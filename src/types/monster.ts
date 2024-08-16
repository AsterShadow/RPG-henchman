"use client";


export interface MonstersResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: StatBlockProps[];
}