"use client";
import React, { useEffect, useState } from 'react';
import images from '@/assets/images';
import Image from 'next/image';
import Button from '@/components/Button';
import StatBlockComponent from '@/components/StatBlock';
import { fetchAllMonsters, fetchMonstersByPage, fetchTotalPages } from '@/app/api/monsterApi';
import Dropdown from '@/components/Dropdown';
import StatBlockEdit from '@/components/StatBlock/edit';
import PaginatedList from '@/components/PaginatedList';
import Pagination from '@/components/Pagination';



const SectionCreateMonster = () => {
    const [flow, setFlow] = useState<string>('');
    const [prevFlow, setprevFlow] = useState<string>('');
    const [monsters, setMonsters] = useState<StatBlockProps[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [editMode, setEditMode] = useState<boolean>(false);
    const [selectedMonster, setSelectedMonster] = useState<StatBlockProps | null>(null);
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);

    const updateFlow = (newflow: string) => {

        setprevFlow(flow)
        setFlow(newflow)
    }

    useEffect(() => {
        const loadMonsters = async () => {
            setLoading(true);
            try {
                const totalPages = await fetchTotalPages();
                setTotalPages(totalPages);
                let fetchedMonsters = await fetchMonstersByPage(page);
                setMonsters(fetchedMonsters);
            } catch (error) {
                console.error("Failed to fetch monsters:", error);
            }
            setLoading(false);
        };

        loadMonsters()
    }, [page])



    const handleMonsterSelect = async (name: string) => {
        setLoading(true);
        try {
            const monster = monsters.find(mon => mon.name === name);
            if (monster) {
                setSelectedMonster(monster);
            }
        } catch (error) {
            console.error("Failed to fetch monster details:", error);
        }
        setLoading(false);

    };

    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    };
    const handleEditModeChange = () => {
        setEditMode(!editMode);
    }

    return (
        <>
            {flow === '' ?
                <div className='w-full flex flex-col items-center justify-center gap-8 lg:justify-between lg:flex-row-reverse lg:py-[14rem]'>
                    <div className="flex items-center justify-center w-80 h-80 mx-auto lg:w-92 h-92 ">
                        <div className="w-[150px] lg:w-[350px] absolute" style={{ transform: `rotate(140deg)` }}>
                            <Image src={images.triangle} alt="Triangle" />
                        </div>
                        <div className='w-[200px] lg:w-[350px] h:auto absolute'>
                            <Image src={images.monsters} alt='monsters image' priority />
                        </div>
                    </div>
                    <div className={`flex flex-col gap-2 items-center lg:w-1/2`}>
                        <h1 className="text-2xl font-headers text-gold lg:text-6xl pb-4">Create Monsters</h1>
                        <Button onClick={() => updateFlow('AIFlow')} disabled>
                            With AI
                        </Button>
                        or
                        <Button onClick={() => updateFlow('premadeFlow')}>
                            From Premade
                        </Button>
                    </div>
                </div>
                :
                <div className='full'>
                    <button onClick={() => updateFlow('')} className='flex items-center justify-center gap-4 capitalize'>
                        <Image src={images.back} alt='go back' />
                        back to monster page
                    </button>
                    {flow === 'premadeFlow' &&
                        <div className='flex flex-col items-center justify-center gap-8 full lg:justify-between'>
                            <h1 className="text-2xl font-headers lg:text-4xl md:pb-8">Starting from premade monster</h1>
                            <div className='full'>
                                {loading &&
                                    <p>Loading...</p>
                                }

                                {!loading && monsters && !selectedMonster &&
                                    <div className='flex flex-col justify-center items-center gap-4'>
                                        <div className='lg:hidden'>
                                            <Pagination
                                                currentPage={page}
                                                totalPages={totalPages}
                                                onPageChange={handlePageChange}
                                            />
                                        </div>
                                        <div className='flex pb-4'>
                                            <PaginatedList options={monsters} onClick={(value) => handleMonsterSelect(value)} />
                                        </div>
                                        <div className='hidden lg:flex'>
                                            <Pagination
                                                currentPage={page}
                                                totalPages={totalPages}
                                                onPageChange={handlePageChange}
                                            />
                                        </div>

                                    </div>
                                }
                                {selectedMonster &&
                                    <div className='flex flex-col gap-4 items-center'>
                                        <div className='flex justify-center items-start gap-4 flex-col md:justify-between md:flex-row w-full px-2 md:px-0'>
                                            <Button onClick={() => setSelectedMonster(null)}>
                                                Monsters
                                            </Button>
                                            <Button onClick={() => handleEditModeChange()}>
                                                Toggle Edit Mode
                                            </Button>
                                        </div>
                                        <StatBlockComponent monster={selectedMonster} editMode={editMode} />
                                    </div>
                                }

                            </div>
                        </div>
                    }
                    {flow === 'AIFlow' &&
                        <>
                        </>
                    }
                </div>
            }

        </>
    )
}

export default SectionCreateMonster;