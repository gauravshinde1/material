import React from 'react';

const InputComponent = ({
    name,
    value,
    type,
    place,
    onChange,
    inputclass
}) => {
    return (
        <React.Fragment>
            <div class="form-group mb-0">
                <input name={ name } value={ value } onChange={ onChange } type={type} className={inputclass} placeholder={place} />
            </div>
        </React.Fragment>
    )
}

export default InputComponent;
