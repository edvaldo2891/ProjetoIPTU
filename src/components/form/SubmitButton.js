import styles from './SubmitButton.module.css'

function SubmitButton({text,type,onClick}){

    return(
        <div>
                <button type={type} className={styles.btn} onClick={onClick}>{text}</button>        
        </div>
    )

}
export default SubmitButton