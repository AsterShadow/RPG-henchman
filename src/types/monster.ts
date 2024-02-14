"use client";

export interface Monster {
    slug: string;
    size: string;
    type: string;
    alignment: string;
    challenge_rating: string;
    environments: string[];
}

export interface MonstersResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Monster[];
}