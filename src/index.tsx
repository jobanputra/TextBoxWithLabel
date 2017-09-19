import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observable, IObservableValue } from 'mobx';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { TextBoxWithLabel } from "./TextBoxWithLabel"

@observer
class TextBoxes extends React.Component<any, any>{
    private userText: IObservableValue<string> = observable("This control is cool!");
    public render(): JSX.Element {

        return (
            <div>
                <div>
                    <h1>TextBoxWithLabel: Features galore!</h1>
                    <hr />
                    <div>
                        <h2>Observable value</h2>
                        <TextBoxWithLabel id="textboxWithLabel"
                            textBoxValue={this.userText}
                            labelValue={"Observable value"} />
                        <br />
                        <label>Textbox value: <span style={{ fontWeight: "normal" }}>{this.userText.get()}</span></label>
                        <br />
                    </div>
                    <h2>Auto select text on focus</h2>
                    <TextBoxWithLabel id="selectable"
                        textBoxValue={observable("Click here to auto select text")}
                        labelValue="Text will be auto selecteded"
                        selectTextOnFocus={true} />
                    <br />
                    <h2>Text area</h2>
                    <TextBoxWithLabel id="textarea"
                        textBoxValue={observable("123 Main Street\r\nLos Angeles")}
                        labelValue="Address"
                        selectTextOnFocus={true}
                        isTextArea={true} />
                    <br />
                    <h2>Minimum length validation</h2>
                    <TextBoxWithLabel id="minumimLengthValidation"
                        textBoxValue={observable("Less than 5 characters will cause an error")}
                        labelValue="Minimum length validation"
                        selectTextOnFocus={true}
                        minimunLength={5}
                        textboxStyle={{ border: "1px solid black" }}
                        errorStyle={{ border: "2px solid red" }} />
                </div>
                <div>
                    <h1>Events</h1>
                    <hr />
                    <div>
                        <h2>onChange</h2>
                        <TextBoxWithLabel id="onChange1"
                            textBoxValue={observable("Text box 1")}
                            labelValue={"onChange 1"}
                            selectTextOnFocus={true}
                            onChange={(id: string, value: string) => {
                                document.getElementById("onChangeSpan").innerHTML = `<strong>${id}</strong> has changed to <strong>${value}</strong>`
                            }} />
                        <br />
                        <TextBoxWithLabel id="onChange2"
                            textBoxValue={observable("Text box 2")}
                            labelValue={"onChange 2"}
                            selectTextOnFocus={true}
                            onChange={(id: string, value: string) => {
                                document.getElementById("onChangeSpan").innerHTML = `<strong>${id}</strong> has changed to <strong>${value}</strong>`
                            }} />
                        <br />
                        <span id="onChangeSpan">Change the value of one of the two textboxes above</span>
                    </div>
                    <div>
                        <h2>onFocus</h2>
                        <TextBoxWithLabel id="onFocus1"
                            textBoxValue={observable("Text box 1")}
                            labelValue={"onFocus 1"}
                            selectTextOnFocus={true}
                            onFocus={(id: string, value: string) => {
                                document.getElementById("onFocusSpan").innerHTML = `Focus on: <strong>${id}</strong> with text <strong>${value}</strong>`
                            }} />
                        <br />
                        <TextBoxWithLabel id="onFocus2"
                            textBoxValue={observable("Text box 2")}
                            labelValue={"onFocus 2"}
                            selectTextOnFocus={true}
                            onFocus={(id: string, value: string) => {
                                document.getElementById("onFocusSpan").innerHTML = `Focus on <strong>${id}</strong> with text <strong>${value}</strong>`
                            }} />
                        <br />
                        <span id="onFocusSpan">Focus on of one of the two textboxes above</span>
                    </div>
                </div>
                <div>
                    <h1>Style using CSS classes or inline classes</h1>
                    <hr />
                    <div>
                        <h2>Label styling</h2>
                        <TextBoxWithLabel id="labelWithInlineStyle"
                            textBoxValue={observable("Click here to auto select text")}
                            labelValue="A bold red label (inline style)"
                            labelStyle={{ color: "red", fontWeight: "bold" }} />
                        <br />
                        <TextBoxWithLabel id="labelwithClassname"
                            textBoxValue={observable("Click here to auto select text")}
                            labelValue="A bold red label (CSS Class)"
                            labelClassname="boldRed" />
                        <br />
                    </div>
                    <h2>Textbox styling</h2>
                    <TextBoxWithLabel id="errorWithInlineStyle"
                        textBoxValue={observable("Less than 5 characters will cause an error")}
                        labelValue="Textbox with minimum length (Inline Style)"
                        selectTextOnFocus={true}
                        minimunLength={5}
                        textboxStyle={{ border: "1px solid black" }}
                        errorStyle={{ border: "2px solid red" }} />
                    <br />
                    <TextBoxWithLabel id="errorWithClassname"
                        textBoxValue={observable("Less than 5 characters will cause an error")}
                        labelValue="Textbox with minimum length (CSS Class)"
                        selectTextOnFocus={true}
                        minimunLength={5}
                        textboxClassname="textboxRegular"
                        errorClassname="textboxError" />
                </div>

                <DevTools />

            </div>

        )
    }
}
ReactDOM.render(<TextBoxes />, document.getElementById('root'));
