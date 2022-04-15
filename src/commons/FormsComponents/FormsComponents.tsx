import styles from './FormComponents.module.css'


export const Textarea = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.form + ' ' + (hasError ? styles.error : " ")}>
            <div>
                <textarea {...props} {...input}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}


export const Input = ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.form + " " + (hasError ? styles.error : ' ')}>
            <div>
                <input {...props} {...input}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}