import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                src='https://images.unsplash.com/photo-1546464677-c25cd52c470b?q=50&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
                className={styles.cover}
            />
            <div className={styles.profile}>
                <Avatar src="https://github.com/tiagoGermano.png"/>
                <strong>Tiago Germano</strong>
                <span>Fullstack Developer</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={20}/>
                    Editar perfil
                </a>
            </footer>

        </aside>
    );
}