import React, { useCallback } from "react";
import { Field } from "react-final-form";
import { useDropzone } from "react-dropzone";

type FileFieldProps ={
    name:any,
    props: any
}

type FileFieldInput = { 
    required :any, 
    input :any, 
    dropZoneProps :any, 
    props: any }

const FileField = ({ name , ...props }:FileFieldProps) => {
  return (
    <>
      <Field name={name} {...props} component={FileFieldInput} />
      <Field
        name={name}
        subscribe={{ touched: true, error: true }}
        render={({ meta: { touched, error } }) =>
          touched && error ? <span>{error}</span> : null
        }
      />
    </>
  );
};

function FileFieldInput({ required, input, dropZoneProps, ...props }:FileFieldInput) {
  const onDrop = useCallback(
    (files:any) => {
      input.onChange(files);
    },
    [input]
  );

  const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
    onDrop,
    noDrag: true,
    ...dropZoneProps,
    accept: {
        'image/png': ['.png'],
        'image/jpeg': ['.jpg', '.jpeg'],
      }
  });

  const files = acceptedFiles.map((file: any ) => (
    <span key={file.path}>
      {file.path} - {file.size} bytes
    </span>
  ));

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <button {...props}>{props.label || "choose file"}</button>
      {files}
    </div>
  );
}

export default FileField;
