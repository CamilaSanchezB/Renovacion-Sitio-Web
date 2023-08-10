import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import '../styles/Flags.css'

/**
 * @function Flags
 * @desc Componente de selección de banderas
 * @category Components
 * @param {function} onDropdownChange - Función de devolución de llamada al cambiar la selección de la bandera
 * @returns {JSX.Element} Componente de selección de banderas
 */

export default function Flags({ onDropdownChange }) {
  const [selectedCountry, setSelectedCountry] = useState(null);
// Array de objetos que representa los países y sus códigos
  const countries = [
    { name: 'Afganistán', code: 'AF' },
    { name: 'Alemania', code: 'DE' },
    { name: 'Andorra', code: 'AD' },
    { name: 'Angola', code: 'AO' },
    { name: 'Anguila', code: 'AI' },
    { name: 'Antártida', code: 'AQ' },
    { name: 'Antigua y Barbuda', code: 'AG' },
    { name: 'Arabia Saudita', code: 'SA' },
    { name: 'Argelia', code: 'DZ' },
    { name: 'Argentina', code: 'AR' },
    { name: 'Armenia', code: 'AM' },
    { name: 'Aruba', code: 'AW' },
    { name: 'Australia', code: 'AU' },
    { name: 'Austria', code: 'AT' },
    { name: 'Azerbaiyán', code: 'AZ' },
    { name: 'Bahamas', code: 'BS' },
    { name: 'Bahrein', code: 'BH' },
    { name: 'Bangladesh', code: 'BD' },
    { name: 'Barbados', code: 'BB' },
    { name: 'Bélgica', code: 'BE' },
    { name: 'Belice', code: 'BZ' },
    { name: 'Benin', code: 'BJ' },
    { name: 'Bermudas', code: 'BM' },
    { name: 'Bielorrusia', code: 'BY' },
    { name: 'Birmania (Myanmar)', code: 'MM' },
    { name: 'Bolivia', code: 'BO' },
    { name: 'Bosnia y Herzegovina', code: 'BA' },
    { name: 'Botsuana', code: 'BW' },
    { name: 'Brasil', code: 'BR' },
    { name: 'Brunéi', code: 'BN' },
    { name: 'Bulgaria', code: 'BG' },
    { name: 'Burkina Faso', code: 'BF' },
    { name: 'Burundi', code: 'BI' },
    { name: 'Bután', code: 'BT' },
    { name: 'Cabo Verde', code: 'CV' },
    { name: 'Camboya', code: 'KH' },
    { name: 'Camerún', code: 'CM' },
    { name: 'Canadá', code: 'CA' },
    { name: 'Chad', code: 'TD' },
    { name: 'Chile', code: 'CL' },
    { name: 'China', code: 'CN' },
    { name: 'Chipre', code: 'CY' },
    { name: 'Ciudad del Vaticano', code: 'VA' },
    { name: 'Colombia', code: 'CO' },
    { name: 'Comoras', code: 'KM' },
    { name: 'Congo', code: 'CG' },
    { name: 'Congo (Rep. Dem.)', code: 'CD' },
    { name: 'Corea del Norte', code: 'KP' },
    { name: 'Corea del Sur', code: 'KR' },
    { name: 'Costa de Marfil', code: 'CI' },
    { name: 'Costa Rica', code: 'CR' },
    { name: 'Croacia', code: 'HR' },
    { name: 'Cuba', code: 'CU' },
    { name: 'Dinamarca', code: 'DK' },
    { name: 'Dominica', code: 'DM' },
    { name: 'Ecuador', code: 'EC' },
    { name: 'Egipto', code: 'EG' },
    { name: 'El Salvador', code: 'SV' },
    { name: 'Emiratos Árabes Unidos', code: 'AE' },
    { name: 'Eritrea', code: 'ER' },
    { name: 'Eslovaquia', code: 'SK' },
    { name: 'Eslovenia', code: 'SI' },
    { name: 'España', code: 'ES' },
    { name: 'Estados Unidos de América', code: 'US' },
    { name: 'Estonia', code: 'EE' },
    { name: 'Etiopía', code: 'ET' },
    { name: 'Fiji', code: 'FJ' },
    { name: 'Filipinas', code: 'PH' },
    { name: 'Finlandia', code: 'FI' },
    { name: 'Francia', code: 'FR' },
    { name: 'Gabón', code: 'GA' },
    { name: 'Gambia', code: 'GM' },
    { name: 'Georgia', code: 'GE' },
    { name: 'Ghana', code: 'GH' },
    { name: 'Gibraltar', code: 'GI' },
    { name: 'Granada', code: 'GD' },
    { name: 'Grecia', code: 'GR' },
    { name: 'Groenlandia', code: 'GL' },
    { name: 'Guadalupe', code: 'GP' },
    { name: 'Guam', code: 'GU' },
    { name: 'Guatemala', code: 'GT' },
    { name: 'Guayana Francesa', code: 'GF' },
    { name: 'Guernsey', code: 'GG' },
    { name: 'Guinea', code: 'GN' },
    { name: 'Guinea Ecuatorial', code: 'GQ' },
    { name: 'Guinea-Bissau', code: 'GW' },
    { name: 'Guyana', code: 'GY' },
    { name: 'Haití', code: 'HT' },
    { name: 'Honduras', code: 'HN' },
    { name: 'Hong Kong', code: 'HK' },
    { name: 'Hungría', code: 'HU' },
    { name: 'India', code: 'IN' },
    { name: 'Indonesia', code: 'ID' },
    { name: 'Irán', code: 'IR' },
    { name: 'Iraq', code: 'IQ' },
    { name: 'Irlanda', code: 'IE' },
    { name: 'Isla Bouvet', code: 'BV' },
    { name: 'Isla de Man', code: 'IM' },
    { name: 'Isla de Navidad', code: 'CX' },
    { name: 'Isla Norfolk', code: 'NF' },
    { name: 'Islandia', code: 'IS' },
    { name: 'Islas Bermudas', code: 'BM' },
    { name: 'Islas Caimán', code: 'KY' },
    { name: 'Islas Cocos (Keeling)', code: 'CC' },
    { name: 'Islas Cook', code: 'CK' },
    { name: 'Islas de Åland', code: 'AX' },
    { name: 'Islas Feroe', code: 'FO' },
    { name: 'Islas Heard y McDonald', code: 'HM' },
    { name: 'Islas Maldivas', code: 'MV' },
    { name: 'Islas Malvinas', code: 'AR' },
    { name: 'Islas Marianas del Norte', code: 'MP' },
    { name: 'Islas Marshall', code: 'MH' },
    { name: 'Islas Pitcairn', code: 'PN' },
    { name: 'Islas Salomón', code: 'SB' },
    { name: 'Islas Turcas y Caicos', code: 'TC' },
    { name: 'Islas Vírgenes Británicas', code: 'VG' },
    { name: 'Israel', code: 'IL' },
    { name: 'Italia', code: 'IT' },
    { name: 'Jamaica', code: 'JM' },
    { name: 'Japón', code: 'JP' },
    { name: 'Jersey', code: 'JE' },
    { name: 'Jordania', code: 'JO' },
    { name: 'Kazajistán', code: 'KZ' },
    { name: 'Kenia', code: 'KE' },
    { name: 'Kirguistán', code: 'KG' },
    { name: 'Kiribati', code: 'KI' },
    { name: 'Kuwait', code: 'KW' },
    { name: 'Laos', code: 'LA' },
    { name: 'Lesoto', code: 'LS' },
    { name: 'Letonia', code: 'LV' },
    { name: 'Líbano', code: 'LB' },
    { name: 'Liberia', code: 'LR' },
    { name: 'Libia', code: 'LY' },
    { name: 'Liechtenstein', code: 'LI' },
    { name: 'Lituania', code: 'LT' },
    { name: 'Luxemburgo', code: 'LU' },
    { name: 'Macao', code: 'MO' },
    { name: 'Macedonia del Norte', code: 'MK' },
    { name: 'Madagascar', code: 'MG' },
    { name: 'Malasia', code: 'MY' },
    { name: 'Malawi', code: 'MW' },
    { name: 'Mali', code: 'ML' },
    { name: 'Malta', code: 'MT' },
    { name: 'Marruecos', code: 'MA' },
    { name: 'Martinica', code: 'MQ' },
    { name: 'Mauricio', code: 'MU' },
    { name: 'Mauritania', code: 'MR' },
    { name: 'Mayotte', code: 'YT' },
    { name: 'México', code: 'MX' },
    { name: 'Micronesia', code: 'FM' },
    { name: 'Moldavia', code: 'MD' },
    { name: 'Mónaco', code: 'MC' },
    { name: 'Mongolia', code: 'MN' },
    { name: 'Montenegro', code: 'ME' },
    { name: 'Montserrat', code: 'MS' },
    { name: 'Mozambique', code: 'MZ' },
    { name: 'Namibia', code: 'NA' },
    { name: 'Nauru', code: 'NR' },
    { name: 'Nepal', code: 'NP' },
    { name: 'Nicaragua', code: 'NI' },
    { name: 'Níger', code: 'NE' },
    { name: 'Nigeria', code: 'NG' },
    { name: 'Niue', code: 'NU' },
    { name: 'Noruega', code: 'NO' },
    { name: 'Nueva Caledonia', code: 'NC' },
    { name: 'Nueva Zelanda', code: 'NZ' },
    { name: 'Omán', code: 'OM' },
    { name: 'Países Bajos', code: 'NL' },
    { name: 'Pakistán', code: 'PK' },
    { name: 'Palaos', code: 'PW' },
    { name: 'Palestina', code: 'PS' },
    { name: 'Panamá', code: 'PA' },
    { name: 'Papúa Nueva Guinea', code: 'PG' },
    { name: 'Paraguay', code: 'PY' },
    { name: 'Perú', code: 'PE' },
    { name: 'Polinesia Francesa', code: 'PF' },
    { name: 'Polonia', code: 'PL' },
    { name: 'Portugal', code: 'PT' },
    { name: 'Puerto Rico', code: 'PR' },
    { name: 'Qatar', code: 'QA' },
    { name: 'Reino Unido', code: 'GB' },
    { name: 'República Centroafricana', code: 'CF' },
    { name: 'República Checa', code: 'CZ' },
    { name: 'República Dominicana', code: 'DO' },
    { name: 'Reunión', code: 'RE' },
    { name: 'Ruanda', code: 'RW' },
    { name: 'Rumania', code: 'RO' },
    { name: 'Rusia', code: 'RU' },
    { name: 'Sáhara Occidental', code: 'EH' },
    { name: 'Samoa', code: 'WS' },
    { name: 'Samoa Americana', code: 'AS' },
    { name: 'San Cristóbal y Nieves', code: 'KN' },
    { name: 'San Marino', code: 'SM' },
    { name: 'San Pedro y Miquelón', code: 'PM' },
    { name: 'San Vicente y las Granadinas', code: 'VC' },
    { name: 'Santa Elena', code: 'SH' },
    { name: 'Santa Lucía', code: 'LC' },
    { name: 'Santo Tomé y Príncipe', code: 'ST' },
    { name: 'Senegal', code: 'SN' },
    { name: 'Serbia', code: 'RS' },
    { name: 'Seychelles', code: 'SC' },
    { name: 'Sierra Leona', code: 'SL' },
    { name: 'Singapur', code: 'SG' },
    { name: 'Siria', code: 'SY' },
    { name: 'Somalia', code: 'SO' },
    { name: 'Sri Lanka', code: 'LK' },
    { name: 'Sudáfrica', code: 'ZA' },
    { name: 'Sudán', code: 'SD' },
    { name: 'Suecia', code: 'SE' },
    { name: 'Suiza', code: 'CH' },
    { name: 'Surinam', code: 'SR' },
    { name: 'Svalbard y Jan Mayen', code: 'SJ' },
    { name: 'Swazilandia', code: 'SZ' },
    { name: 'Tailandia', code: 'TH' },
    { name: 'Taiwán', code: 'TW' },
    { name: 'Tanzania', code: 'TZ' },
    { name: 'Tayikistán', code: 'TJ' },
    { name: 'Territorios Australes Franceses', code: 'TF' },
    { name: 'Timor Oriental', code: 'TL' },
    { name: 'Togo', code: 'TG' },
    { name: 'Tokelau', code: 'TK' },
    { name: 'Tonga', code: 'TO' },
    { name: 'Trinidad y Tobago', code: 'TT' },
    { name: 'Túnez', code: 'TN' },
    { name: 'Turkmenistán', code: 'TM' },
    { name: 'Turquía', code: 'TR' },
    { name: 'Tuvalu', code: 'TV' },
    { name: 'Ucrania', code: 'UA' },
    { name: 'Uganda', code: 'UG' },
    { name: 'Uruguay', code: 'UY' },
    { name: 'Uzbekistán', code: 'UZ' },
    { name: 'Vanuatu', code: 'VU' },
    { name: 'Venezuela', code: 'VE' },
    { name: 'Vietnam', code: 'VN' },
    { name: 'Wallis y Futuna', code: 'WF' },
    { name: 'Yemen', code: 'YE' },
    { name: 'Yibuti', code: 'DJ' },
    { name: 'Zambia', code: 'ZM' },
    { name: 'Zimbabue', code: 'ZW' }
  ];

  const selectedCountryTemplate = (option, props) => {
    if (option) {
      return (
        <div className="flagsAlign">
          <img
            alt={option.name}
            src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
            className={`mr-2 flag flag-${option.code.toLowerCase()}`}
            style={{ width: '18px' }}
          />
          <div style={{ color: 'white' }}>{option.name}</div>
        </div>
      );
    }
    return <div>{props.placeholder}</div>;
  };

  /**
   * @desc Plantilla para mostrar las opciones de países
   * @param {object} option - Opción de país
   * @returns {JSX.Element} Elemento JSX para mostrar la opción de país
   */
  const countryOptionTemplate = (option) => {
    return (
      <div className="flagsAlign">
        <img
          alt={option.name}
          src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
          className={`mr-2 flag flag-${option.code.toLowerCase()}`}
          style={{ width: '18px' }}
        />
        <div>{option.name}</div>
      </div>
    );
  };

  /**
   * @desc Maneja el cambio en la selección del dropdown
   * @param {object} e - Evento de cambio
   */
  const handleDropdownChange = (e) => {
    setSelectedCountry(e.value);
    onDropdownChange(e.value); // Llamada a la función de devolución de llamada en el componente padre
  };

  return (
    <span className="p-float-label flagsInputWrapper">
      <Dropdown
        className="flagsInput"
        value={selectedCountry}
        onChange={handleDropdownChange}
        options={countries}
        optionLabel="name"
        valueTemplate={selectedCountryTemplate}
        itemTemplate={countryOptionTemplate}
        style={{ outline: 'none' }}
        placeholder="Nationality"
        inputId="flags"
      />
      <label htmlFor="flags" style={{ color: 'white', paddingLeft: '.3em' }}>
        Nationality
      </label>
    </span>
  );
}