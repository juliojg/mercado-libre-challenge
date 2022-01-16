import { Typography } from "@material-ui/core"
import { shallowEqual, useSelector } from "react-redux"
import { MercadoLibreState } from "../../type"
import styles from "../../Assets/Styles/Containers/ErrorMessage/ErrorMessage.module.css"

export const ErrorMessage : React.FunctionComponent<{}> = () => {
    const fetchError: boolean = useSelector(
        (state: MercadoLibreState) => state.fetchError,
        shallowEqual
    )

    return (fetchError ? <Typography color="secondary" className={styles.errorMessage}> Ha ocurrido un error. </Typography> : <></>)
}