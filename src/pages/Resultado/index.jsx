import Head from 'next/head'
import Image from 'next/image'
import { Poppins } from 'next/font/google'
import styles from '@/styles/Resultado.module.css'
import { useRouter } from 'next/router'
import { useState, useRef, useEffect } from 'react'

//Components
import NavBar from '../../../components/Navbar'
import Banner from '../../../components/Banner'
import PaginationSearch from '../../../components/Pagination'
import Footer from '../../../components/Footer'

import CardResultado from '../../../components/CardResultado'


export default function Resultado() {
  
  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log(currentPage)
  };

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

  };

  const handleValueRangeEndChange = (event) => {
    const rawValue = event.target.value.replace(/\D/g, '');
    const formattedValue = `R$ ${rawValue}`;
    setEndValue(formattedValue);
    
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

  };

  const handledormitoriosEndChange = (event) => {
    const rawValue = event.target.value.replace(/\D/g, '');
    const formattedValue = `${rawValue } Dormi.`;
    setDormitoriosEndValue(formattedValue);
   
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

  };

  const handleRangeEndChange = (event) => {
    const rawValue = event.target.value.replace(/\D/g, '');
    const formattedValue = `${rawValue } St.`;
    setRangeEndValue(formattedValue);

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

  };

  const handleGaragensRangeEndChange = (event) => {
    const rawValue = event.target.value.replace(/\D/g, '');
    const formattedValue = `${rawValue } Gar.`;
    setGaragensRangeEndValue(formattedValue);

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
    console.log('buscou')
    if(e){
    e.preventDefault();
    }
    // Adicione a query de estado à URL
    router.push({
      pathname: '/Resultado',
      query: { 
        stringSearch: stringSearch, 
        contrato: contrato,
        imovelType: selectedImovelType,
        refCode: refCode,
        options: selectedOptions,
        valueInit: valueInit,
        valueEnd: valueEnd,
        dormitoriosInitValue: dormitoriosInitValue,
        dormitoriosEndValue: dormitoriosEndValue,
        SuitesInitValue: rangeInitValue,
        SuitesEndValue: rangeEndValue,
        rangeGaragensInitValue: rangeGaragensInitValue,
        rangeGaragensEndValue: rangeGaragensEndValue,   
      },

    });
  };
  
  useEffect(() => {
    const { stringSearch, contrato, imovelType, valueInit, valueEnd, dormitoriosInitValue, dormitoriosEndValue, SuitesInitValue, SuitesEndValue, rangeGaragensInitValue, rangeGaragensEndValue, options, refCode } = router.query;


    // Defina os estados com base nos parâmetros da URL
    setStringSearch(stringSearch)
    setRefCode(refCode)
    setSelectedImovelType(imovelType)
    SetContrato(contrato || "Venda");
    setImovelType(imovelType === "true");
    setInitValue(valueInit || '');
    setEndValue(valueEnd || '');
    setDormitoriosInitValue(dormitoriosInitValue || '');
    setDormitoriosEndValue(dormitoriosEndValue || '');
    setRangeInitValue(SuitesInitValue || '');
    setRangeEndValue(SuitesEndValue || '');
    setGaragensRangeInitValue(rangeGaragensInitValue || '');
    setGaragensRangeEndValue(rangeGaragensEndValue || '');

    if(options != undefined){
      setSelectedOptions(options);
    }
  
    
  }, [router.query.stringSearch, router.query.contrato, router.query.imovelType, router.query.valueInit, router.query.valueEnd, router.query.dormitoriosInitValue, router.query.dormitoriosEndValue, router.query.SuitesInitValue, router.query.SuitesEndValue, router.query.rangeGaragensInitValue, router.query.rangeGaragensEndValue, router.query.options, router.query.refCode]);
  console.log(stringSearch)
  
  //API Result
  const items = ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9", "item10", "item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9", "item10"];
  const itemsPerPage = 3;
  




  return (
    <>
      <Head>
        <title>Resultado - AN ESTATE COMPANY</title>
        <meta name="title" content="Real House - AN ESTATE COMPANY"/>
        <meta name="description" content="Descrição Real House - AN ESTATE COMPANY"/>
        <meta name="keywords" content="Keywords Real House - AN ESTATE COMPANY"/>
        <meta name="robots" content="index, follow"/>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="language" content="Portuguese"/>
        <meta name="revisit-after" content="15 days"/>
        <meta name="author" content="SisProf"/>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1, minimum-scale=1"/>
      </Head>

      <main className={styles.main}>
        <div className={styles.MainBanner}>
            <NavBar/>
            <section className={styles.MainBusca}>
              <form onSubmit={Search}>
                <div className={styles.MainButtons}>
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
                        Procure por cidade ou bairro.                  
                      </p>
                    </div>
                    <button type='submit'>
                        <p>BUSCAR</p> 
                    </button>   
                  </div>
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
                      <p >MAIS FILTROS</p>
                    </div>
                    <div className={`${styles.typeImovelArrow} ${moreFilters ? styles.arrowRotated : ""}`}>
                      {arrowIcon}  
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
              </form>
            </section>







            <div className={styles.ListResultado}>
              {/* Pagination Loop pos API */}
                <CardResultado/>
                <CardResultado/>
                <CardResultado/>
                <CardResultado/>

                <Banner  style={{ marginBottom: '10px' }} />

                <CardResultado/>
                <CardResultado/>
                <CardResultado/>
                <CardResultado/>
                <PaginationSearch  items={items}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}/>
            </div>
        </div>
      </main>

      <Footer/>
    </>
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
width="22"
height="22"
viewBox="0 0 22 22"
>
<image
  width="22"
  height="22"
  data-name="Camada 7"
  xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAB60lEQVQ4jaXVT4iNURjH8Y9hCokFYmXBRBo2o8afKGpY3EYm/w1NZmFBTZStnZ1CKSuFKGz8z8IUSdEYMimJRAkbokZkI+nU82rczjv3XvOr2++873ne7z3neZ73vOM6Vi9Rh1ZhM1ZgHprwAYO4Hr9/NKEGcAZOoSszNw2t6MUj7MVQMdk0CnQ+no+AvsRBLEMbtuFazC3FU3TWAk/CA8yK6z1YiGMYxhQ8w3ZU8DXibkZcaSrORhqS1uAeDuFwJnZypOQVpga8JQduwdYY7w9oP9bGvZN4g0Voj2KmlG3B7bjuyoF3haftncCBgA5EDr+U7LI/8pzy35PLcXv4pfDj4R2jQAudC2/Lrbgo2PvwjfiJHzWgSa/DZ+fAv8Kbw6/WASxUZOB3LhXvwhc3ACzUGv4xB74bvh4TGwT3hg/mwBfwOaBHG4DuxIIYn86Bv+FKjPdhdx3Q5SM64jHu5MCV6IRCZ3AE0zOx4+MlehiFS4XfkCaqj80EvVWyqu+4gRep6piLdZgT88PR609UnRWd8Z5X62IUMh083SV/mlqyL3VDcaMAV0qg3QGeiR1YGWdJc0CG4pAfqH4wpSJ9He5noD04X7LCmkorvpwJSq2T2u6/lSqZtlm90jFBC3D6CnzCW2way/b/Cn8AUntcIbVAu6oAAAAASUVORK5CYII="
></image>
</svg>



const carSVG =    
  <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  width="41"
  height="23"
  viewBox="0 0 41 23"
  >
  <image
    width="41"
    height="23"
    data-name="Camada 8 copiar 3"
    xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAXCAYAAACWEGYrAAADd0lEQVRIicXXWazdUxQG8J/rlqKpoaoUfSg1TzFGBRelQvsgBDFFScQY04OpYmqRGEIIIlKEF4knhKqhMZRUKBGthz6g5iHmNNziyqrv8HdyG/fecxJfcrL3/p89fHvtb6299lrT+vYyDOyOs3EcNh3CsOV4FPfhq+Es1MRQSY7FQzgm7a/xGr7FKPRiAL80xkzCIehJey5mj4Rk7xD6TMFibIzHYsnvh7HGHtngVdgH04dLsuc//q9NvBuCh+JErMKt+BDLcFP6Ho43Yt2f8TYuxDshWlY8As91m2RNODq7X4grQ+DSSGBHXJ6+M2KpOvIvQ+yOyGB6jvtmTMNl3SJ5CfpwHRZgThZ6NQ60SXTZQkuPO2Gb0jtm4ifMx1RcgSUhu0unJCfgNnyCa7FzNFWkDowECus3xvyRcqPGt6eweeovp+xLOb9Tkq0J90tZ5FbggLZ+qwaZ64e2PiuxPdbGk7HsadgSdw2FZLt3l6ZuxHY4D59Fl6W/MXgzTtTC5EZ9dMplIdbEF6mXbi8IuZNwfr7VKfTjPTyTaNA6mX+RvCZHW3gE96T+cTx1TByliSL0RNpPY39sm001MSES+T2OJDG3tL5n9LsOdshFcXv+L2f9O5hfjevxCs7MTfF/oJzxqBhJosKCIlneuDQ6PLgDYjXhLHyOizvc4BZ4HxtiXE9Mq3HljRS74QSc0dDnSFEbPSxjbylLDkR3kzqcWHTV34V5WqikZHwrbCzt0qTdJFh4SSO2/db2Z8W0GxI6vsHdbaGnW6gb6CN8h3nYum3elU2SzZAxKpadnRDVn5j5QeP26AZeT0wel3xgVi6MXRtzrz6ZVpZzUNKxXzOobohTk7BKBvRCgvnyWLqJFxNjx8cid+L5ONK5iYNNrIt9cVH6Srs4LMo6vYm7qysVOh7A0Y1JFoZgHfnExM77cVaus3b8mPZ6ScceT3tKDDAYFofgOUmOj09+MDdtkcGS3uhuRmOS8vYNUp+ajEbDGlvh0zUsvCJWamFOfu0YaEisbpwjU2/lApMjr78WHuT5sCjk9sZb+TYxxOrZsNkaCA4HdUont26UjBsbyw205xSDZUGnRJuliwdxb8NyM7tAsFCJRcXAZ/MkqYSjsqfic2x758HeOGXmyh8fxun5Vt5euiwddQP1RqrMvYxQWizUc6TeT0X8H+BP5kXC/E7C0dsAAAAASUVORK5CYII="
  ></image>
  </svg>

const quartosSVG =
  <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  width="29"
  height="24"
  viewBox="0 0 29 24"
  >
  <image
    width="29"
    height="24"
    data-name="Camada 11 copiar 3"
    xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAYCAYAAAAGXva8AAAB7UlEQVRIicXWTYhOcRQG8N87H74nyldSzELYWZB8lGjGQogVk8iCvY/FlCUrJdkpC0WJjRVbCguWSrJSYqGRhXzmY8zo6Fzdrju9b3lvns2/e5/b/znnOadzbmt461q4ibnYrjkcwRkM9aVEKA+iH4sakP2MHVgcOoXoZJ7fG8z0z/19lZev0dOAWCQ1D71l0VaeSxsQLHAVBzWUVVtU7S1jCU5hHSYq3Cucxz5srAQfrr3DBdytu3gq0Wm4nV1dh83Y38apoezYe52KrkzBiPQ4ZpW4aIoRnMRzHMZ4if+JYZzFATyoOjWV6GCeN/C0hp+DY3iMhzX8yxRdmG50JNpTOXun4NXwEyW+lVzZCcUYfIHluIa9mJHTaTztqguqPwV+1PCt7IuCD0cGsAq7yxMpPjyUzyH2Pms5vebSCORjOjWzho/7PmRgwW/I97UT6VzWoi76f8E2XMFsNRNptMtiBW5lF+9UsqewKCJZVloA3UKU4ls21UCIPsqVE/jUUKZlXA/RNVngJ5lxt7OU5YtsV2BBUdO32IU3DQiWEcNm5L9vmcn8VbmE1V2yOWz9gtPZwX+Jxn/M5ZxI3cZF3K+Kxu6MIT0fz7Cnza7tFJFIbKPYVHF/jNffF9/BlhQcw9FcWd3CCazHJnzF2C+UBV1rEnMGsQAAAABJRU5ErkJggg=="
  ></image>
  </svg>

const banheirosSVG =
  <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  >
  <image
    width="24"
    height="24"
    data-name="Camada 10 copiar 3"
    xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB2UlEQVRIia3WzatNYRQG8N89roGPfJWvkEKYETPEVbrJQFFK0ZWbkX+AKEM3zHykjIRSKJToThQTJnIHIgYGSJlgcMk3rdvatds5t7PPOU/tVu8+56znfda71vOeni19a5VwDgdyeQrXsRWvcFMbKBNcxD68xmeswd/4Tn5+BYP4WYemkXEutuEulmJXvn+J7RhFP2bV1dCbcTomYyTXxzLputz51FT3oS5Bo7L+k3EO3uEW+rA5VS7rlKCodxz2SmzEaTzGwlSxtw5Bb5P3wziJj7iH/VmyR5jfDYJfOFRaD+A2NmCoDkG1RM0Q3TUTb0tl7EhBFffrJC0jFCzApWzTozlc3XjeY2couIPFuIApmJHJO0G0+xLcCILleIbzdW1gHHxPNxgKgsPZ6yNtp2uO4SA4g9VpZANpG53u/mAO5mDRRZ8yXu7SzvtzIEeLOajV2y2gyNdTEHzpMkGU+XeUqyB4kXFHF5LPw4qc+m8FQZjbG5zNm6xdTMqmWVR4WXHI4Zq78RBP0hrCPWe3cD6NbJIf2IRpOIEHKl4UVrwKR7CnTQVPcbz8B6Hqps/zHg5cLV2l4z0TUn1gYthDHvAY/uem69P7Y+jiXmgF17I0YTdB+nXsR/gHBdVquAad7YUAAAAASUVORK5CYII="
  ></image>
  </svg>

const metragemSVG = 
  <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  width="36"
  height="24"
  viewBox="0 0 36 24"
  >
  <image
    width="36"
    height="24"
    data-name="Camada 9 copiar 3"
    xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAYCAYAAACSuF9OAAADZElEQVRIibXXeaimYxgG8N/ZhslynEgassyxRBnb2KecNIRRsu8ioiyDKKQshSEmlKUoaoo//GEcJJSyZN8GYw9ZM5YxWQ9jHN1cn95eM+mYb+56e57vfd73ea/nvq/7uu+vZ+bITlq2EY7Hnlgfv6EP/XgX1+CN9kvdsv7GPj24DmdiUuP+L3gZz2ITLMA9OAU/rSpAa+Nh7I6vcR/ey/rWuUZwEU7Hq3gNW+KPVQHo5oA5CXcnTG07L6CPxBQ8hwdxQLcBbYfjMD2hKZuMc7FX7l2LuXgeTyZsu+E77ItHuwWob+qmU27FI7gz9wawEPvjcxwYfj2BT7BNQlUgxjAL93YLUC/2aZ2wsuhHrJW1m7BGY73IPZz5U/Fw16wArYlfGxvOwPWtD4w35sW1ZZkXodftNqCyHTP2BNzRjWd6GplUnDocP+f35tggOtVVQIfFUwJoZgh8MNbDZrgFj+OZhk5dlvGKbgPaNmldoRnEWfgGd+CEpPZ+Ifq8ZOclIfgizMau3QDU0aE5uBjTQuYvkj1C6KYilzAekuvklJn+eO9QPLQygDoeWoyl4cRWOBU7ZL0DpnTqBpyPt3Lvw4SvsvJ1jOJtHJF9OjToj5zI2B9u9mYcyNXT8VDpzeW4He+kqJYSjyWM9dJqCeOGKTWzI4xDqWvDAVQSclcOuDSlaCh7dJ5flsQYyDODSZzJTQ/NzQO/Y5cAXBjuVAivwhb4IdeVATspXnkTj+FsfJVMPSZAL4hn6zDnRPnHEubvE/bi7Xiz2pd9G6JKeVgUT81L1lXl33gF4f8oZaQviv4CvszaaEJ/I+anxZmVb5RsPJDwXt0GJHzQIuecxnxJYz7eEMmO1e89GmI6I2Er2zvefR/H4qjWuz29+cDgCk79XzaQE7atqexPN+YvZixafNZ67i/rTdxH/ieg6SF418pHb1T2xCjyRO1SfBoB7RqgBWH76ATe6087Upm1fUrNGUntlQYkOlJu/wD/6vpbNi3N/nAyZXHIWm3KbVh9At9vt7//pP2S9M3VS7+EV+KxGmutysnOOCidQbWupTElamUlCdWW3J/7xctK749brU3TSkLqUJVQxcV1io/L+xtUJePCpGudtsJQ2VAblLaUBHSyZXl2Wnrzqa1/NSvyUO39d/vC0J+r+so0nBqcTwAAAABJRU5ErkJggg=="
  ></image>
  </svg>