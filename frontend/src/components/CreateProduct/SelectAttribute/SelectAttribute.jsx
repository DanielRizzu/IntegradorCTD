import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCar,
  faChevronDown,
  faPlus,
  fas,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import baseUrl from '../../../utils/baseUrl.json';
import style from './SelectAttribute.module.css';
import Input from '../../Forms/Input/Input';

const SelectAttribute = ({getAttributes}) => {
  const [arrayGetAtrributes, setArrayGetAttributes] = useState([]);
  const [arraySelectedOptions, setArraySelectedOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(()=>{
    getAttributes(arraySelectedOptions)
    console.log(arraySelectedOptions)
  },[arraySelectedOptions])
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    //getAttribute(value);
  };

  let selectAttribute = selectedOption
    ? `${selectedOption?.name}`
    : 'Elige un atributo';

  useEffect(() => {
    const jwt = JSON.parse(localStorage.getItem('jwt'));
    fetch(`${baseUrl.url}/attributes`, {
      mode: 'cors',
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setArrayGetAttributes(data))
      .catch((err) => console.log(err));
  }, []);

  /* Faltaria validar que no pueda repetir nuevamente un mismo select */
  const handleAddAttribute = () => {
    setArraySelectedOptions([
      ...arraySelectedOptions,
      { icon: selectedOption.icon, id: selectedOption.id, name: selectedOption.name },
    ]);
    setSelectedOption(null);
    // setAttributeName({ value: '', valid: null });
    // setAttributeIcon({ value: '', valid: null });
  };

  const handleDeleteAttribute = (attributeId) => {
    const newArrayAttributes = arraySelectedOptions.filter((attr)=>{ return attr.id !== attributeId});
    setArraySelectedOptions(newArrayAttributes);
    console.log("ARRAY FILTRADO")
    console.log(newArrayAttributes)
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.containerSelect}>
          <div className={style.selectBox}>
            {/* select */}
            <div className={style.dropDownHeader} onClick={toggling}>
              {/* selectContent*/}
              <div className={style.selectContent}>
                {/* <FontAwesomeIcon icon={faLocationDot} /> */}
                <p
                  className={
                    selectedOption
                      ? style.description
                      : style.initialDescription
                  }
                >
                  {selectedOption?.icon && (
                    <FontAwesomeIcon icon={fas[selectedOption?.icon]} />
                  )}
                  {selectAttribute}
                </p>
              </div>
            </div>
            {isOpen && (
              <ul className={style.dropDownList}>
                {/* options*/}
                {arrayGetAtrributes.map((option) => (
                  <li
                    className={style.optionContent}
                    onClick={onOptionClicked(option)}
                    key={option.id}
                  >
                    {/* option */}
                    {/* <FontAwesomeIcon icon={faLocationDot} /> */}
                    <div>
                      <h2 className={style.title}>
                        <FontAwesomeIcon icon={fas[option?.icon]} />{' '}
                        {option?.name}
                      </h2>
                      {/* <p className={style.description}>{option.country.name}</p> */}
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
        <button
          className={`${style.btn} ${style.btnPlus}`}
          onClick={handleAddAttribute}
          type="button" // Para que no se ejecute el submit y se envien cada vez las imagenes
        >
          <FontAwesomeIcon icon={faPlus} />
        </button> 
      </div>
      {arraySelectedOptions.map((attributeArray, i) => {
        console.log('attribute', attributeArray);
        return (
          <div className={style.containerInput} key={i}>
            <p className={style.input}>
              <FontAwesomeIcon icon={fas[attributeArray?.icon]} />
              {attributeArray.name}
            </p>
            <button
              className={`${style.btn} ${style.btnDelete}`}
              onClick={() => handleDeleteAttribute(attributeArray.id)}
              type="button"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        );
      })}
    </>
  );
};

export default SelectAttribute;

{
  /* <div>
      <div>
        {arrayGetAtrributes?.map((attribute) => (
          <div className={style.feature} key={attribute.id}>
            <FontAwesomeIcon icon={fas[attribute.icon]} />
            <p>{attribute.name}</p>
          </div>
        ))}
      </div>
    </div> */
}
