import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router';

import styles from '@/styles/components/MainBusca/MainBusca.module.css'

//ItemsNext
import Link from 'next/link'
import { useState, useRef } from 'react';

import axios from 'axios';
import 'swiper/swiper-bundle.css';

export default function MainBusca() {
  const router = useRouter();
  /* styles for main search*/
  const inputRef = useRef(null);
  const [stringSearch, setStringSearch] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleSearchIconClick = () => {
    inputRef.current.focus();
    
  };

  const handleInputChange = (event) => {
    setStringSearch(event.target.value);
    console.log(stringSearch)
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const isInputEmpty = stringSearch === "";
  /////////////////////////////////////////
  /* styles for main refCode*/
  const inputRefCode = useRef(null);  
  const [refCode, setRefCode] = useState("")
  const [isRefCodeFocused, setIsRefCodeFocused] = useState(false);
  const handleRefIconClick = () => {
    inputRefCode.current.focus();
  };

  const handleInputRefCodeChange = (event) => {
    setRefCode(event.target.value);
    console.log(refCode)
  };

  const handleInputRefFocus = () => {
    setIsRefCodeFocused(true);
  };

  const handleInputRefBlur = () => {
    setIsRefCodeFocused(false);
  };

  const isInputRefCodeEmpty = refCode === "";
  ///////////////////////////////////////
  //fixed items search
  const [contrato, SetContrato] = useState("Venda") //Aluguel
  const [ moreFilters, setMoreFilters] = useState(false) //true


  /*Tipo Imovel Drop Down*/
  const [imovelType, setImovelType] = useState(false); // Controla a visibilidade do dropdown
  const [selectedImovelType, setSelectedImovelType] = useState(''); // Armazena o valor do checkbox selecionado

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setSelectedImovelType(value);
  };

  const toggleDropdown = () => {
    setImovelType(!imovelType);
  };
  /*Range value Drop Down*/
  const [valueRange, setValueRange] = useState(false); //dropdown
  const [valueInit, setInitValue] = useState('');
  const [valueEnd, setEndValue] = useState('');

  const handleValueRangeInitChange = (event) => {
    const rawValue = event.target.value.replace(/\D/g, '');
    const formattedValue = `R$ ${rawValue}`;
    setInitValue(formattedValue);
    console.log(valueInit)
  };

  const handleValueRangeEndChange = (event) => {
    const rawValue = event.target.value.replace(/\D/g, '');
    const formattedValue = `R$ ${rawValue}`;
    setEndValue(formattedValue);
    console.log(valueEnd)
  };

  const handleValueDropdownClickSuites = (e) => {
    e.stopPropagation();
    setValueRange(!valueRange);
  };

  ////////////////////////

  /* Range Dormitorios Drop Down*/
  const [dormitoriosRange, setDormitoriosRange] = useState(false)//dropdown
  const [dormitoriosInitValue, setDormitoriosInitValue] = useState('');
  const [dormitoriosEndValue, setDormitoriosEndValue] = useState('');
  const handledormitoriosInitChange = (event) => {
    const rawValue = event.target.value.replace(/\D/g, '');
    const formattedValue = ` ${rawValue } Dormi.`;
    setDormitoriosInitValue(formattedValue);
    console.log(rangeInitValue)
  };

  const handledormitoriosEndChange = (event) => {
    const rawValue = event.target.value.replace(/\D/g, '');
    const formattedValue = `${rawValue } Dormi.`;
    setDormitoriosEndValue(formattedValue);
    console.log(rangeEndValue)
  };

  const handleDormitoriosClickSuites = (e) => {
    e.stopPropagation();
    setDormitoriosRange(!dormitoriosRange);
  };

  /////////////////////////////
  /*Range Suites Drop Down*/ 
  const [suitesRange, setSuitesRange] = useState(false); // Dropdown
  const [rangeInitValue, setRangeInitValue] = useState('');
  const [rangeEndValue, setRangeEndValue] = useState('');

  const handleRangeInitChange = (event) => {
    const rawValue = event.target.value.replace(/\D/g, '');
    const formattedValue = ` ${rawValue } St.`;
    setRangeInitValue(formattedValue);
    console.log(rangeInitValue)
  };

  const handleRangeEndChange = (event) => {
    const rawValue = event.target.value.replace(/\D/g, '');
    const formattedValue = `${rawValue } St.`;
    setRangeEndValue(formattedValue);
    console.log(rangeEndValue)
  };

  const handleDropdownClickSuites = (e) => {
    e.stopPropagation();
    setSuitesRange(!suitesRange);
  };
  //////////////////////////
  /*Range Drop Down*/
  const [garagensRange, setGaragensRange] = useState(false) //dropdown
  const [rangeGaragensInitValue, setGaragensRangeInitValue] = useState('');
  const [rangeGaragensEndValue, setGaragensRangeEndValue] = useState('');

  const handleGaragensRangeInitChange = (event) => {
    const rawValue = event.target.value.replace(/\D/g, '');
    const formattedValue = ` ${rawValue } Gar.`;
    setGaragensRangeInitValue(formattedValue);
    console.log(rangeInitValue)
  };

  const handleGaragensRangeEndChange = (event) => {
    const rawValue = event.target.value.replace(/\D/g, '');
    const formattedValue = `${rawValue } Gar.`;
    setGaragensRangeEndValue(formattedValue);
    console.log(rangeEndValue)
  };

  const handleGaragensDropdownClick = (e) => {
    e.stopPropagation();
    setGaragensRange(!garagensRange);
  };
  //////////////////
  /* Opicionais Drop Down */
  const [optionsItemsRadio, setOptionsItemsRadio] = useState(false); //dropdown
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = ['Interfone', 'Piscina', 'Lareira', 'Playground', 'Portaria', 'Salão de festa', 'Agua Quente', 'Bicicletário', 'Churrasqueira', 'Conj. Habitacional', 'Entrada Lateral', 'Esquina'];

  const handleOptionChange = (e) => {
    const optionValue = e.target.value;

    if (selectedOptions.includes(optionValue)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== optionValue));
    } else {
      setSelectedOptions([...selectedOptions, optionValue]);
    }
  }; 

  const handleDropdownClick = () => {
    setOptionsItemsRadio(!optionsItemsRadio);
  };

  //Envio form para busca
  //envio da query a ser interpretada na tela de resultados buscando assim dentro da model da API da sisprof

  const Search = (e) => {
    e.preventDefault();
    // Adicione a query de estado à URL
    router.push({
      pathname: '/Resultado',
      query: { 
        text: stringSearch, 
        contrato: contrato,
        imovelType: imovelType,
        refCode: refCode,
        options: selectedOptions,
        valueInit: valueInit,
        valueEnd: valueEnd,
        dormitoriosInitValue: dormitoriosInitValue,
        dormitoriosEndValue: dormitoriosEndValue,
        SuitesInitValue: rangeInitValue,
        SuitesEndValue: rangeEndValue,
        rangeGaragensInitValue: rangeGaragensInitValue,
        rangeGaragensEndValue: rangeGaragensInitValue,   
      },

    });
  };

  return (
    <section className={styles.MainBusca}>
        <form onSubmit={Search}>
        <div className={styles.MainButtons}>
            {/* locação e venda */}
            <div className={styles.ContractButtons}>
              <div className={`${styles.Vendas} ${contrato === "Venda" ? styles.VendasSelected : ""}`} onClick={() => SetContrato("Venda")}>
                <p>VENDA</p> 
              </div>

              <div className={`${styles.Locação} ${contrato === "Aluguel" ? styles.LocaçãoSeleced : ""}`} onClick={() => SetContrato("Aluguel")}>
                <p>LOCAÇÃO</p>
              </div>
            </div>

            {/*TIPO DE IMOVEL*/}
            <div className={styles.typeImovel} onClick={() => setImovelType(!imovelType)} style={imovelType ? { backgroundColor: 'var(--Main-Color)' } : {}}>
              <p>TIPO DE IMÓVEL</p>
              <div className={`${styles.typeImovelArrow} ${imovelType ? styles.arrowRotated : ""}`}>
                {arrowIcon}  
              </div>  
              {/* dropdown */}
              { imovelType &&
                <div className={styles.MainDropDownTypeImovel} onClick={(e) => e.stopPropagation()}>
                  <label className={styles.labelMainType} htmlFor="Apartamento">
                    <p>Apartamento</p>
                    <input
                      type="checkbox"
                      name="imovelType"
                      value="Apartamento"
                      id="Apartamento"
                      checked={selectedImovelType === 'Apartamento'}
                      onChange={handleCheckboxChange}
                    />
                  </label>
                  <label className={styles.labelMainType} htmlFor="Casa">
                    <p>Casa</p>
                    <input
                      type="checkbox"
                      name="imovelType"
                      value="Casa"
                      id="Casa"
                      checked={selectedImovelType === 'Casa'}
                      onChange={handleCheckboxChange}
                    />
                  </label>
              </div>
            }
              
                        
            </div>

            {/* more filters */}
            <div className={styles.MoreFilters} onClick={() => setMoreFilters(!moreFilters)} style={moreFilters ? { backgroundColor: 'var(--Main-Color)' } : {}}>
              <div className={styles.MoreFiltersIcons}>
                {funilIcon}
                <p>MAIS FILTROS</p>
              </div>
              <div className={`${styles.typeImovelArrow} ${moreFilters ? styles.arrowRotated : ""}`}>
                {arrowIcon}  
              </div>  
              
            </div>

            {/* coderef */}
            <div className={styles.CodeRef}>
              <div className={styles.IconRef} onClick={handleRefIconClick}>
                {searchIcon}
              </div>
              
              <input type="text"
               ref={inputRefCode}
               value={refCode}
               onChange={handleInputRefCodeChange}
               onFocus={handleInputRefFocus}
               onBlur={handleInputRefBlur} />
              <p style={{ opacity: isRefCodeFocused || !isInputRefCodeEmpty ? 0 : 1 }}>REFERÊNCIA</p>
              
            </div>

        </div>
        {/* Oculte */}
        {moreFilters &&
          <div className={styles.Advancedmenu}>
            <div className={styles.dropPaternLittle} onClick={handleValueDropdownClickSuites} style={valueRange ? { backgroundColor: 'var(--Main-Color)' } : {}}>
                <p>VALOR</p>
                <div className={`${styles.typeImovelArrow} ${valueRange ? styles.arrowRotated : ""}`}>
                  {arrowIcon}  
                </div>  
                {valueRange &&
                <div className={styles.MainDropDownRange} onClick={(e) => e.stopPropagation()}>
                    <div className={styles.rangeInit}>
                      <p>DE:</p>
                      <input type="text" placeholder='R$' value={valueInit} onChange={handleValueRangeInitChange}/>
                    </div>
                    <div className={styles.rangeInit}>
                      <p>ATÉ:</p>
                      <input type="text" placeholder='R$' value={valueEnd} onChange={handleValueRangeEndChange}/>
                    </div>
                </div> 
                }
            </div>
            <div className={styles.dropPatern} onClick={handleDormitoriosClickSuites} style={dormitoriosRange ? { backgroundColor: 'var(--Main-Color)' } : {}}>
              <p>DORMINTÓRIOS</p>
              <div className={`${styles.typeImovelArrow} ${dormitoriosRange ? styles.arrowRotated : ""}`}>
                {arrowIcon}  
              </div>  
              {dormitoriosRange &&
                <div className={styles.MainDropDownRange} onClick={(e) => e.stopPropagation()}>
                  <div className={styles.rangeInit}>
                    <p>DE:</p>
                    <input type="text" placeholder='Dormi.' value={dormitoriosInitValue} onChange={handledormitoriosInitChange}/>
                  </div>
                  <div className={styles.rangeInit}>
                    <p>ATÉ:</p>
                    <input type="text" placeholder='Dormi.' value={dormitoriosEndValue} onChange={handledormitoriosEndChange} />
                  </div>
                </div> 
              }
            </div>
            <div className={styles.dropPaternLittle} onClick={handleDropdownClickSuites} style={suitesRange ? { backgroundColor: 'var(--Main-Color)' } : {}}>
              <p>SUÍTES</p>
              <div className={`${styles.typeImovelArrow} ${suitesRange ? styles.arrowRotated : ''}`}>
                {arrowIcon}
              </div>
              {suitesRange && (
                <div className={styles.MainDropDownRange} onClick={(e) => e.stopPropagation()}>
                  <div className={styles.rangeInit}>
                    <label>
                      <p>DE:</p>
                      <input type="text" placeholder='St.' value={rangeInitValue} onChange={handleRangeInitChange} />
                    </label>
                  </div>
                  <div className={styles.rangeInit}>
                    <label>
                      <p>ATÉ:</p>
                      <input type="text" placeholder='St.' value={rangeEndValue} onChange={handleRangeEndChange} />
                    </label>
                  </div>
                </div>
              )}
            </div>
            <div className={styles.dropPatern} onClick={handleGaragensDropdownClick} style={garagensRange ? { backgroundColor: 'var(--Main-Color)' } : {}}>
              <p>GARAGENS</p>
              <div className={`${styles.typeImovelArrow} ${garagensRange ? styles.arrowRotated : ""}`}>
                {arrowIcon}  
              </div>  
              {garagensRange &&
                <div className={styles.MainDropDownRange3} onClick={(e) => e.stopPropagation()}>
                  <div className={styles.rangeInit}>
                    <p>DE:</p>
                    <input type="text" placeholder='Gar.' value={rangeGaragensInitValue} onChange={handleGaragensRangeInitChange}/>
                  </div>
                  <div className={styles.rangeInit}>
                    <p>ATÉ:</p>
                    <input type="text" placeholder='Gar.' value={rangeGaragensEndValue} onChange={handleGaragensRangeEndChange}/>
                  </div>
                </div> 
              }
            </div>
            <div className={styles.dropPatern} onClick={handleDropdownClick} style={optionsItemsRadio ? { backgroundColor: 'var(--Main-Color)' } : {}}>
              <p>OPICIONAIS</p>
              <div className={`${styles.typeImovelArrow} ${optionsItemsRadio ? styles.arrowRotated : ""}`}>
                {arrowIcon}  
              </div>  
              {optionsItemsRadio && (
                <div className={styles.MainDropDown} onClick={(e) => e.stopPropagation()}>
                  {options.map((option) => (
                    <div key={option} className={styles.RadioButton}>
                      <label htmlFor={option}>{option}
                      <input
                        type="checkbox"
                        id={option}
                        value={option}
                        checked={selectedOptions.includes(option)}
                        onChange={handleOptionChange}
                        
                      />
                      </label>
                    </div>
                  ))}
                </div> 
              )}
            </div>
          </div>
        }
        <div className={styles.MainSearch}>
          <div className={styles.SearchIcon} onClick={handleSearchIconClick}>
            {searchIcon}
          </div>
          <div className={styles.DivInput}>
              <input
              type="text"
              ref={inputRef}
              value={stringSearch}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            <p style={{ opacity: isInputFocused || !isInputEmpty ? 0 : 1 }}>
              Procure por cidade ou bairro. <br /><span>Qual lugar você quer morar?</span>
            </p>
          </div>   
          <button type='submit'>
              <p>BUSCAR</p> 
          </button>
        </div>
        </form>
    </section>
  )
}
//icons
const arrowIcon =     
<svg
xmlns="http://www.w3.org/2000/svg"
xmlnsXlink="http://www.w3.org/1999/xlink"
width="17"
height="13"
viewBox="0 0 17 13"
>
<image
  width="17"
  height="13"
  data-name="Triângulo 1 copiar 8"
  xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAANCAYAAABPeYUaAAAA90lEQVQokZXSMSuFYRjG8d85GXwBHYuyKwMWLGc4m4GST0CskhTJIgZZZFBMPoANGwMLKxkMGMkoGSTprke9vb3v4b2257qv/t3X3VNrNQf7sIxZfKimEUzXcY9HbKJWAdGNDewH5At76MVYBcg6jnFdT8YzDjCHrn8AptDAbjzqmcEJHhKoXa3YeCbV/8xDQmtopYMVKeCLuMTV7zwPecMWVtFZABlHTxwza+YhoVPcYSXnN1LVHbz+BQltYxijGW8etzjPhztKIC9p5QXcoB8DmCwKl0FCR2hiCUPpY70XBcvqhL5TrYlU46Is2G6T0BMOcVaawA8t+ysYBi33kgAAAABJRU5ErkJggg=="
></image>
</svg>

const funilIcon = 
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  width="18"
  height="17"
  viewBox="0 0 18 17"
>
  <image
      width="18"
      height="17"
        xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAYAAADQWvz5AAABHUlEQVQ4jZ3UzytEURjG8c+MYTMSO1YovxY2skSN2EkWyoq1PVkqsbHC0taPjZK/QBZKdrIjRIpSQtFslNKtO3Wb7p2ZO8/qnOd9z7fnnE5vZrIwfI92fKFDOr0jj2IOe9jACi7RWiOqiE4cYz9IFJiHmEJbykS3eMVENjTm8YubFJBT9AeQYJONFHowgN0aIKshoKtkREE/GMUi5ipAxrCOWTzHgQJdYBlH6I6BtOAc2ziJFnIxzVsYxyMyZbXAu8ZS+aHyRCVN4w1nEe8g/BpDcQeSQIHWUIjsZ7CZ1FwJlA//SEkvaKwH1BDjxb1pVVAqVQNFU/2huZ5ETfgM1wsYxENSc+Kd8YE+3KE3nBA79YCe8I0rjISzJ174B1RjLr+mvL9JAAAAAElFTkSuQmCC"
  ></image>
</svg>

const searchIcon = 
<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  width="36"
  height="36"
  viewBox="0 0 36 36"
>
  <image
    width="36"
    height="36"
    data-name="Camada 7"
    xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAADvElEQVRYhb2Ye2iWVRzHP+qszTlNc0uUuRLLorxMLCJv4PbnFNPIRJ1iJIGCRCQm+l/ihVKkP/xDUeYFh5eWBQaGCpZCUQgmqE2CxFXLyrlY8/LOV37j+8jh9LzP5X3nvjA45/eec57v+d3P+rQ09adAlAOzgRnAc8AooAToBFqBK8A54CugOe5ThRB6FlgPvA4MTLjnc2Ar8E2uBX3zINIP2AxcABanIGOYA5wB9gHDwhak1dBQ3XJajt+7gN+AdqAUGAE8lmPtL0AdcMkVptFQBXAqhMw94AAwC6iUD70EPCPtTQU+BW56+0YD3wHVrjCNhn4EJnmyk8BK4LIjs0sOsbNFokvyJ4DtMnMfZ/2vwHTgGik0tD2EzBagVmSKgIXAUeB34Ib+OqSFj7RnCVDvnVMF7A4mSTQ0GTjtOe9GYB1wH5ioA6sjzkBBMEHjecAR7/cFQGMSDb3nkTkLrBWZOkWNSyYj9TfLuQP0c8ZNwCYg68g2WADEacgS3H+e7CngT2nmvCNvA7YBB4Gr+tggoAZ4EdgF/OGsL5b/VGhuwTG3KEY7y735TpEZABxy5Nf14Z+99e3SRlPI2beVzz7R3DRTE2eyRc7YbvCFxkuVqQP5KyFkkmCbt2ZKHKExzthue1HjSkf+gSIrH5hZf3L2PR9lMssbriNasWzReIcSm5lvT55kAhihcRqXRRF63EtgGZkHRdH8AokE+NudRJnsjheW+RTiJChNSsjCuMuZFyvkexpjnfMycbe+6ozLzOkeAaEpzrg5jtB+Z2xJcmYPk5nlzb9Pm6mtYI50nLtQXFQWR/66JE5DFuqNzrw8JJnli2WeC9hlTySJHGsd/nHmK6zmFEjGEu7HXsFtsEdBEkJG5l9P1qBKnw9eAL5VExfAEu5qEuSWYtWvKk9u7ciXwBqtSYp6kXHTh/noW8EkitCT2jw5Yo01aj8A78q/wlCmbvJraXaot2alvtONXFE2WAe8nOL2HapLlrtuicjTqlNDQtZbKXob2OsKwwgNUhcYtJuPAtaqvKMHo1ue/meyCvXPUWSyMkGtGvg0+EtRO06Xzvp73WpfIjONj/nAm06DbuRfU4Neo7eY/zBs1RPquN5vbVGHByYzzZyI0UynnjGHc52lc4brchmlDGtv78Zc8iGKZLZjCXzG2tnPIn7PShutST8eBiPzPvBqxBrLE2/EkOkxGKEPYw6r14u0V9A3Ijl2v5N6kwwisypEfls9s/3rpVdhTm3p3NK+pXDrb61HsRqVNscUDuABNF3Nmc5vK7EAAAAASUVORK5CYII="
  ></image>
</svg>
