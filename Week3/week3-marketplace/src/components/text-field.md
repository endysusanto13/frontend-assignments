```jsx
const Demo = () => {
  const [value, setValue] = React.useState("");
  return (
    <TextField
      label="Age"
      type="number"
      id="age"
      value={value}
      onChangeValue={setValue}
    />
  );
};

<Demo />;
```

`<TextField />` will auto-associate the label and input even without id.

When id is not given, a unique number will automatically be assigned to id of `<Label />` and `<TextInput />`.

```jsx
<div className="grid gap-5 md:grid-cols-2">
  <TextField label="First Name" />
  <TextField label="Last Name" />
</div>
```
