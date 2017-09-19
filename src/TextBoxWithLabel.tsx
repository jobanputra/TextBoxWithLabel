import * as React from "react";
import { IObservableValue } from "mobx";
import { observer } from "mobx-react";

export interface TextBoxWithLabelProps {
  id: string,
  textBoxValue: IObservableValue<string>,
  labelValue: string,
  selectTextOnFocus?: boolean,
  isTextArea?: boolean,
  minimunLength?: number,

  divClassname?: string,
  textboxClassname?: string,
  labelClassname?: string,
  errorClassname?: string,

  divStyle?: React.CSSProperties
  textboxStyle?: React.CSSProperties,
  labelStyle?: React.CSSProperties,
  errorStyle?: React.CSSProperties,

  onChange?: (name: string, value: string) => void,
  onFocus?: (name: string, value: string) => void,
}

@observer
export class TextBoxWithLabel extends React.Component<TextBoxWithLabelProps, any>{
  public constructor(props: TextBoxWithLabelProps) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  public render(): JSX.Element {
    let textboxClassname = "";
    if(this.props.textboxClassname)
      textboxClassname +=this.props.textboxClassname;

    if(this.props.textBoxValue.get().length < this.props.minimunLength && this.props.errorClassname)
      textboxClassname = `${textboxClassname} ${this.props.errorClassname}`;      

    let textboxStyle = this.props.textboxStyle
    if (this.props.textBoxValue.get().length < this.props.minimunLength)
      textboxStyle = { ...textboxStyle, ...this.props.errorStyle };


    return (
      <div className={this.props.divClassname} style={this.props.divStyle}>
        <label htmlFor={this.props.id}
          className={this.props.labelClassname}
          style={this.props.labelStyle}>
          {this.props.labelValue}
        </label>

        {(this.props.isTextArea) ?
          <textarea id={this.props.id} name={this.props.id}
            className={textboxClassname}
            style={textboxStyle}
            rows={3}
            value={this.props.textBoxValue.get()}
            onChange={this.onChange}
            onFocus={this.onFocus} />
          :
          <input type="text" id={this.props.id} name={this.props.id}
            className={textboxClassname}
            style={textboxStyle}
            value={this.props.textBoxValue.get()}
            onChange={this.onChange}
            onFocus={this.onFocus} />
        }
      </div>


    );
  }

  private onChange(event: React.FormEvent<HTMLElement>) {
    let textBox = event.currentTarget as HTMLInputElement;
    if (textBox) {
      this.props.textBoxValue.set(textBox.value);
    }

    if (textBox && this.props.onChange)
      this.props.onChange(textBox.id, textBox.value);
  }

  private onFocus(event: React.FormEvent<HTMLElement>) {
    let textBox = event.currentTarget as HTMLInputElement;
    if (textBox && this.props.selectTextOnFocus) {
      textBox.select();
    }

    if (textBox && this.props.onFocus)
      this.props.onFocus(textBox.id, textBox.value);

  }
}