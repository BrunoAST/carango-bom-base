import {useHistory, useParams} from "react-router";

const Formulario = ({children, ehValido, cadastroServico, alteraServico, valores, ...rest}) => {
    const {id} = useParams();
    const history = useHistory();

    function onSubmit(event) {
        event.preventDefault();
        if (!ehValido) return;
        if (id) {
            alteraServico({ ...valores }).then(res => history.goBack());
            return;
        }
        cadastroServico({ ...valores }).then(res => history.goBack());
    }

    return (
        <form {...rest} data-testid="form" onSubmit={onSubmit}>
            {children}
        </form>
    );
};

export default Formulario;
