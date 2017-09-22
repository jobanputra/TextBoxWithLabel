# TextBoxWithLabel
A feature rich and flexible textbox control for ReactJS with support for length validation, textarea and much more. Ability to style individual parts and event hooks. Uses MobX and written in Typescript.

## Requirements
1. ReactJS
2. MobX
3. MobX-React
4. Typescript

# Demo
Live demo: https://jobanputra.github.io/TextBoxWithLabel/

# Features
1. Observable value: React to what the user enters.
2. Auto select text on focus: Automatically select the text when the control receives focus. This feature can be turned on or off by setting the value of the `selectTextOnFocus` property.
3. Support for text area: Convert the textbox into a textarea (for entering addresses, etc). This feature can be configured by setting the value of the `isTextArea` property.
4. Minimum length validation: Provide feedback to the user that attention is needed by setting the value of the `minimunLength` property along with the `errorStyle` or `errorClassname` properties.


# Usage

## Import and setup
Copy the `TextBoxWithLabel.tsx` file into the appropriate folder. Then import the **React**, **MobX**, **MobX-React** and  **TextBoxWithLabel** modules and use it in your code. 
```typescript
import * as React from 'react';
import { observable, IObservableValue } from 'mobx';
import { observer } from 'mobx-react';
import { TextBoxWithLabel } from "./TextBoxWithLabel"
```
## Basic usage
Add the `TextBoxWithLabel` tag and set values for the `id`, `textBoxValue` and `labelValue` properties.
```typescript
<TextBoxWithLabel id="textboxWithLabel"
	textBoxValue={this.userText}
	labelValue={"Observable value"} />
```
## Auto select text
Set `selectTextOnFocus` to `true` to automatically select the text in the textbox when the textbox receives focus.
```typescript
<TextBoxWithLabel id="selectable"
	textBoxValue={observable("Click here to auto select text")}
	labelValue="Text will be auto selecteded"
	selectTextOnFocus={true} />
```

## Text area
Set the `isTextArea` to `true` to convert the textbox into a textarea. This is useful for entering addresses, longer text response, etc.
```typescript
<TextBoxWithLabel id="textarea"
	textBoxValue={observable("123 Main Street\r\nLos Angeles")}
	labelValue="Address"
	selectTextOnFocus={true}
	isTextArea={true} />
```
### Minimum length validation
Provide feedback to the user that attention is needed by setting the value of the `minimunLength` property along with the `errorStyle` or `errorClassname` properties. See **Styling** section below
```typescript
<TextBoxWithLabel id="minumimLengthValidation"
	textBoxValue={observable("Less than 5 characters will cause an error")}
	labelValue="Minimum length validation"
	selectTextOnFocus={true}
	minimunLength={5}
	textboxStyle={{ border: "1px solid black" }}
	errorStyle={{ border: "2px solid red" }} />
```
# Events
1. `onChange(id:string, value:string)`: When the value in the textbox is changed the `onChange` event is fired.
2. `onFocus(id:string, value:string)`: When the textbox receives focus the `onFocus` event is fired. 

## Usage - `onChange`
```jsx
<TextBoxWithLabel id="onChange1"
	textBoxValue={observable("Text box 1")}
	labelValue={"onChange 1"}
	selectTextOnFocus={true}
	onChange={(id: string, value: string) => {
		//Event handler
		}} />	
```
## Usage - `onFocus`
```jsx
<TextBoxWithLabel id="onFocus1"
	textBoxValue={observable("Text box 1")}
	labelValue={"onFocus 1"}
	selectTextOnFocus={true}
	onFocus={(id: string, value: string) => {
		//Event handler
		 }} />
```
# Styling
You can style indvidual components of the control (textbox, label and surronding div) using CSS classes or inline styles

## Inline styles
Set values for the `labelStyle`, `textboxStyle`, `divStyle` and `errorStyle` properties. All properties are **optional**.

```typescript
<TextBoxWithLabel id="labelWithInlineStyle"
	textBoxValue={observable("Click here to auto select text")}
	labelValue="A bold red label (inline style)"
	labelStyle={{ color: "red", fontWeight: "bold" }} />
```
## CSS classes
Set values for the `labelClassname`, `textboxClassname`, `divClassname` and `errorClassname` properties. All properties are **optional**.
```typescript
<TextBoxWithLabel id="labelwithClassname"
	textBoxValue={observable("Click here to auto select text")}
	labelValue="A bold red label (CSS Class)"
	labelClassname="boldRed" />
```
## Minimum lenght validation with styling
When the `minimumLength` field is set and the length of the `textBoxValue` property is less than it, the control adds the `errorStyle` to the textbox inline style and `errorClassname` to the textbox classes.
```typescript
<TextBoxWithLabel id="errorWithInlineStyle"
	textBoxValue={observable("Less than 5 characters will cause an error")}
	labelValue="Textbox with minimum length (Inline Style)"
	selectTextOnFocus={true}
	minimunLength={5}
	textboxStyle={{ border: "1px solid black" }}
	errorStyle={{ border: "2px solid red" }} />
```
# Debug

Minimal boilerplate for a single-page app using MobX, React and TypeScript with TSX.

Initial run:

* Clone repo
* Install Node.js
* `npm install`
* `npm start`
* visit http://localhost:3000
