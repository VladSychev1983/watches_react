import React from "react";

interface MyState {
      city: string,
      offset: number | string,
    }

type FormProps = {
    onSubmit?: ()  => void;
}

type State = Readonly<MyState>;


class Form extends React.Component<FormProps,State> {
    constructor(props: FormProps) {
        super(props)
        this.state = {
            city: '',
            offset: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit (event: React.FormEvent) {
        //вызвать функцию добавления часов
    }
    handleChange(event: { target: { name: string; value: number | string; }; }) {
        //отслеживаем изменения формы.
        const {name, value} = event.target;
        console.log(name, value);
        if(name && value) {
            this.setState({
                city: name,
                offset: value,
            })
        }
    }
    render(): React.ReactNode {
        return (
            <React.Fragment>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="city">Название</label>
                        <input type="text" name="city" placeholder="Например Москва" 
                        onChange={this.handleChange} required />
                        <label htmlFor="offset">Временная зона</label>
                        <input type="text" name="offset" placeholder="Например 1" 
                        onChange={this.handleChange} 
                        value={this.state.offset} required/>
                        <input type="submit" value="Добавить"/>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}
export default Form;