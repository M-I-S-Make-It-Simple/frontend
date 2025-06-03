'use client';
import forparents from '@/assets/for_parents.jpg';
import forparents2 from '@/assets/for_parents2.jpg';
import styles from '@/styles/parents.module.css';
import Image from 'next/image';

export default function ParentsPage() {
    return (
        <>
            <div className={styles.photo}>
                <Image 
                    src={forparents}
                    alt="фото 1 для батьків"
                    width={1800}
                    height={1000}
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>

            <div className={styles.photo}>
                <Image 
                    src={forparents2}
                    alt="фото 2 для батьків"
                    width={1800}
                    height={1000}
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>
        </>
    );
}
