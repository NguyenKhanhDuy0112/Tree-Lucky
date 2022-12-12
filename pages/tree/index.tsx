import styles from "./tree.module.scss"

function Tree() {
    return (
        // <section className={`${styles['tree']}`}>
        //     <div className={`${styles['box']}`}>
        //         <div className={`${styles['tree__branch']}`}>
        //             <div className={`${styles['tree__branch-re']}`}></div>
        //             <div className={`${styles['tree__branch-2']}`}>
        //                 <div className={`${styles['tree__leaf']} ${styles['tree__branch-2-leaf']}`}></div>
        //             </div>
        //             <div className={`${styles['tree__branch-3']}`}>
        //                 <div className={`${styles['tree__leaf']} ${styles['tree__branch-3-leaf']}`}></div>
        //             </div>
        //         </div>
        //         <div className={`${styles['tree__plan']}`}></div>
        //     </div>
        // </section>
        <section>
            <div className={`${styles['enim']}`}></div>
        </section>
    );
}

export default Tree;