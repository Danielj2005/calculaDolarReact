import type { ReactNode } from 'react';

// se definen los tipos de datos para cada propiedad 
type NeonContainerProps = {
    children?: ReactNode;
}

function NeonContainer(props: NeonContainerProps) {
    const { children } = props;
    
    return (
        <div className="form-container text-bg-danger text-center">
            {children}
        </div>
    )
}

export default NeonContainer
