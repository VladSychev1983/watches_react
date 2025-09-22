import React from "react";

interface MyState {
      city: string,
      offset: number | string,
    }

type FormProps = {
    onSubmit: (event:React.FormEvent, data: object)  => void;
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
        event.preventDefault();
        this.props.onSubmit(event, this.state);
    }
    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        //отслеживаем изменения формы.
        const {name, value} = event.target;
        console.log(name, value);
        if(name === 'offset') {
            this.setState({
                offset: value,
            })  
        }
        else if (name === 'city') {
            this.setState({
                city: value,
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
                        onChange={this.handleChange}  value={this.state.city} required />
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