import React from 'react'
import { Select } from 'antd'

const { Option } = Select

const Timezone = ({ name, onChange, defaultValue }) => {
  return (
    <Select name={name} defaultValue={defaultValue} onChange={onChange}>
      <Option value="Pacific/Midway">(UTC-11:00) Midway Island</Option>
      <Option value="Pacific/Samoa">(UTC-11:00) Samoa</Option>
      <Option value="Pacific/Honolulu">(UTC-10:00) Hawaii</Option>
      <Option value="US/Alaska">(UTC-09:00) Alaska</Option>
      <Option value="America/Los_Angeles">(UTC-08:00) Pacific Time (US &amp; Canada)</Option>
      <Option value="America/Tijuana">(UTC-08:00) Tijuana</Option>
      <Option value="US/Arizona">(UTC-07:00) Arizona</Option>
      <Option value="America/Chihuahua">(UTC-07:00) La Paz</Option>
      <Option value="America/Mazatlan">(UTC-07:00) Mazatlan</Option>
      <Option value="US/Mountain">(UTC-07:00) Mountain Time (US &amp; Canada)</Option>
      <Option value="America/Managua">(UTC-06:00) Central America</Option>
      <Option value="US/Central">(UTC-06:00) Central Time (US &amp; Canada)</Option>
      <Option value="America/Mexico_City">(UTC-06:00) Guadalajara</Option>
      <Option value="America/Mexico_City">(UTC-06:00) Mexico City</Option>
      <Option value="America/Monterrey">(UTC-06:00) Monterrey</Option>
      <Option value="Canada/Saskatchewan">(UTC-06:00) Saskatchewan</Option>
      <Option value="America/Bogota">(UTC-05:00) Bogota</Option>
      <Option value="US/Eastern">(UTC-05:00) Eastern Time (US &amp; Canada)</Option>
      <Option value="US/East-Indiana">(UTC-05:00) Indiana (East)</Option>
      <Option value="America/Lima">(UTC-05:00) Lima</Option>
      <Option value="America/Bogota">(UTC-05:00) Quito</Option>
      <Option value="Canada/Atlantic">(UTC-04:00) Atlantic Time (Canada)</Option>
      <Option value="America/Caracas">(UTC-04:30) Caracas</Option>
      <Option value="America/La_Paz">(UTC-04:00) La Paz</Option>
      <Option value="America/Santiago">(UTC-04:00) Santiago</Option>
      <Option value="Canada/Newfoundland">(UTC-03:30) Newfoundland</Option>
      <Option value="America/Sao_Paulo">(UTC-03:00) Brasilia</Option>
      <Option value="America/Argentina/Buenos_Aires">(UTC-03:00) Buenos Aires</Option>
      <Option value="America/Argentina/Buenos_Aires">(UTC-03:00) Georgetown</Option>
      <Option value="America/Godthab">(UTC-03:00) Greenland</Option>
      <Option value="America/Noronha">(UTC-02:00) Mid-Atlantic</Option>
      <Option value="Atlantic/Azores">(UTC-01:00) Azores</Option>
      <Option value="Atlantic/Cape_Verde">(UTC-01:00) Cape Verde Is.</Option>
      <Option value="Africa/Casablanca">(UTC+00:00) Casablanca</Option>
      <Option value="Europe/London">(UTC+00:00) Edinburgh</Option>
      <Option value="Etc/Greenwich">(UTC+00:00) Greenwich Mean Time : Dublin</Option>
      <Option value="Europe/Lisbon">(UTC+00:00) Lisbon</Option>
      <Option value="Europe/London">(UTC+00:00) London</Option>
      <Option value="Africa/Monrovia">(UTC+00:00) Monrovia</Option>
      <Option value="UTC">(UTC+00:00) UTC</Option>
      <Option value="Europe/Amsterdam">(UTC+01:00) Amsterdam</Option>
      <Option value="Europe/Belgrade">(UTC+01:00) Belgrade</Option>
      <Option value="Europe/Berlin">(UTC+01:00) Berlin</Option>
      <Option value="Europe/Berlin">(UTC+01:00) Bern</Option>
      <Option value="Europe/Bratislava">(UTC+01:00) Bratislava</Option>
      <Option value="Europe/Brussels">(UTC+01:00) Brussels</Option>
      <Option value="Europe/Budapest">(UTC+01:00) Budapest</Option>
      <Option value="Europe/Copenhagen">(UTC+01:00) Copenhagen</Option>
      <Option value="Europe/Ljubljana">(UTC+01:00) Ljubljana</Option>
      <Option value="Europe/Madrid">(UTC+01:00) Madrid</Option>
      <Option value="Europe/Paris">(UTC+01:00) Paris</Option>
      <Option value="Europe/Prague">(UTC+01:00) Prague</Option>
      <Option value="Europe/Rome">(UTC+01:00) Rome</Option>
      <Option value="Europe/Sarajevo">(UTC+01:00) Sarajevo</Option>
      <Option value="Europe/Skopje">(UTC+01:00) Skopje</Option>
      <Option value="Europe/Stockholm">(UTC+01:00) Stockholm</Option>
      <Option value="Europe/Vienna">(UTC+01:00) Vienna</Option>
      <Option value="Europe/Warsaw">(UTC+01:00) Warsaw</Option>
      <Option value="Africa/Lagos">(UTC+01:00) West Central Africa</Option>
      <Option value="Europe/Zagreb">(UTC+01:00) Zagreb</Option>
      <Option value="Europe/Athens">(UTC+02:00) Athens</Option>
      <Option value="Europe/Bucharest">(UTC+02:00) Bucharest</Option>
      <Option value="Africa/Cairo">(UTC+02:00) Cairo</Option>
      <Option value="Africa/Harare">(UTC+02:00) Harare</Option>
      <Option value="Europe/Helsinki">(UTC+02:00) Helsinki</Option>
      <Option value="Europe/Istanbul">(UTC+02:00) Istanbul</Option>
      <Option value="Asia/Jerusalem">(UTC+02:00) Jerusalem</Option>
      <Option value="Europe/Helsinki">(UTC+02:00) Kyiv</Option>
      <Option value="Africa/Johannesburg">(UTC+02:00) Pretoria</Option>
      <Option value="Europe/Riga">(UTC+02:00) Riga</Option>
      <Option value="Europe/Sofia">(UTC+02:00) Sofia</Option>
      <Option value="Europe/Tallinn">(UTC+02:00) Tallinn</Option>
      <Option value="Europe/Vilnius">(UTC+02:00) Vilnius</Option>
      <Option value="Asia/Baghdad">(UTC+03:00) Baghdad</Option>
      <Option value="Asia/Kuwait">(UTC+03:00) Kuwait</Option>
      <Option value="Europe/Minsk">(UTC+03:00) Minsk</Option>
      <Option value="Africa/Nairobi">(UTC+03:00) Nairobi</Option>
      <Option value="Asia/Riyadh">(UTC+03:00) Riyadh</Option>
      <Option value="Europe/Volgograd">(UTC+03:00) Volgograd</Option>
      <Option value="Asia/Tehran">(UTC+03:30) Tehran</Option>
      <Option value="Asia/Muscat">(UTC+04:00) Abu Dhabi</Option>
      <Option value="Asia/Baku">(UTC+04:00) Baku</Option>
      <Option value="Europe/Moscow">(UTC+04:00) Moscow</Option>
      <Option value="Asia/Muscat">(UTC+04:00) Muscat</Option>
      <Option value="Europe/Moscow">(UTC+04:00) St. Petersburg</Option>
      <Option value="Asia/Tbilisi">(UTC+04:00) Tbilisi</Option>
      <Option value="Asia/Yerevan">(UTC+04:00) Yerevan</Option>
      <Option value="Asia/Kabul">(UTC+04:30) Kabul</Option>
      <Option value="Asia/Karachi">(UTC+05:00) Islamabad</Option>
      <Option value="Asia/Karachi">(UTC+05:00) Karachi</Option>
      <Option value="Asia/Tashkent">(UTC+05:00) Tashkent</Option>
      <Option value="Asia/Calcutta">(UTC+05:30) Chennai</Option>
      <Option value="Asia/Kolkata">(UTC+05:30) Kolkata</Option>
      <Option value="Asia/Calcutta">(UTC+05:30) Mumbai</Option>
      <Option value="Asia/Calcutta">(UTC+05:30) New Delhi</Option>
      <Option value="Asia/Calcutta">(UTC+05:30) Sri Jayawardenepura</Option>
      <Option value="Asia/Katmandu">(UTC+05:45) Kathmandu</Option>
      <Option value="Asia/Almaty">(UTC+06:00) Almaty</Option>
      <Option value="Asia/Dhaka">(UTC+06:00) Astana</Option>
      <Option value="Asia/Dhaka">(UTC+06:00) Dhaka</Option>
      <Option value="Asia/Yekaterinburg">(UTC+06:00) Ekaterinburg</Option>
      <Option value="Asia/Rangoon">(UTC+06:30) Rangoon</Option>
      <Option value="Asia/Bangkok">(UTC+07:00) Bangkok</Option>
      <Option value="Asia/Bangkok">(UTC+07:00) Hanoi</Option>
      <Option value="Asia/Jakarta">(UTC+07:00) Jakarta</Option>
      <Option value="Asia/Novosibirsk">(UTC+07:00) Novosibirsk</Option>
      <Option value="Asia/Hong_Kong">(UTC+08:00) Beijing</Option>
      <Option value="Asia/Chongqing">(UTC+08:00) Chongqing</Option>
      <Option value="Asia/Hong_Kong">(UTC+08:00) Hong Kong</Option>
      <Option value="Asia/Krasnoyarsk">(UTC+08:00) Krasnoyarsk</Option>
      <Option value="Asia/Kuala_Lumpur">(UTC+08:00) Kuala Lumpur</Option>
      <Option value="Australia/Perth">(UTC+08:00) Perth</Option>
      <Option value="Asia/Singapore">(UTC+08:00) Singapore</Option>
      <Option value="Asia/Taipei">(UTC+08:00) Taipei</Option>
      <Option value="Asia/Ulan_Bator">(UTC+08:00) Ulaan Bataar</Option>
      <Option value="Asia/Urumqi">(UTC+08:00) Urumqi</Option>
      <Option value="Asia/Irkutsk">(UTC+09:00) Irkutsk</Option>
      <Option value="Asia/Tokyo">(UTC+09:00) Osaka</Option>
      <Option value="Asia/Tokyo">(UTC+09:00) Sapporo</Option>
      <Option value="Asia/Seoul">(UTC+09:00) Seoul</Option>
      <Option value="Asia/Tokyo">(UTC+09:00) Tokyo</Option>
      <Option value="Australia/Adelaide">(UTC+09:30) Adelaide</Option>
      <Option value="Australia/Darwin">(UTC+09:30) Darwin</Option>
      <Option value="Australia/Brisbane">(UTC+10:00) Brisbane</Option>
      <Option value="Australia/Canberra">(UTC+10:00) Canberra</Option>
      <Option value="Pacific/Guam">(UTC+10:00) Guam</Option>
      <Option value="Australia/Hobart">(UTC+10:00) Hobart</Option>
      <Option value="Australia/Melbourne">(UTC+10:00) Melbourne</Option>
      <Option value="Pacific/Port_Moresby">(UTC+10:00) Port Moresby</Option>
      <Option value="Australia/Sydney">(UTC+10:00) Sydney</Option>
      <Option value="Asia/Yakutsk">(UTC+10:00) Yakutsk</Option>
      <Option value="Asia/Vladivostok">(UTC+11:00) Vladivostok</Option>
      <Option value="Pacific/Auckland">(UTC+12:00) Auckland</Option>
      <Option value="Pacific/Fiji">(UTC+12:00) Fiji</Option>
      <Option value="Pacific/Kwajalein">(UTC+12:00) International Date Line West</Option>
      <Option value="Asia/Kamchatka">(UTC+12:00) Kamchatka</Option>
      <Option value="Asia/Magadan">(UTC+12:00) Magadan</Option>
      <Option value="Pacific/Fiji">(UTC+12:00) Marshall Is.</Option>
      <Option value="Asia/Magadan">(UTC+12:00) New Caledonia</Option>
      <Option value="Asia/Magadan">(UTC+12:00) Solomon Is.</Option>
      <Option value="Pacific/Auckland">(UTC+12:00) Wellington</Option>
      <Option value="Pacific/Tongatapu">(UTC+13:00) Nuku'alofa</Option>
    </Select>
  )
}

export default Timezone
