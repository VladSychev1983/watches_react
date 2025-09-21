import React from "react";

type FormProps = {
    city?: string,
    offset?: number,
    onSubmit?: ()  => void;
}

class Form extends React.Component<FormProps> {
    constructor(props: FormProps) {
        super(props)
        this.state = {
            city: '',
            offset: ''
        }
    }
    render(): React.ReactNode {
        return (
            <React.Fragment>
                <div>form here.</div>
            </React.Fragment>
        )
    }
}
export default Form;