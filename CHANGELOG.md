# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]
### Added
- MapPin
- Modal
- NavBar
- Notify
- PageHeader
- Select
- SubTitle
- Tab
- Table
- Upload

- DatePicker
- Steps
- Input
- Icon
- Radio
- Pagination

### Changed
- Checkbox, アニメーションが適当なので修正する


## 0.0.91 -2019-04-09
### Fixed
- CellNormal

## 0.0.9 -2019-04-09

### Added
- Button
  - Support icon type
- Theme
  - gray dark color
  - createTheme

### Changed 
- Theme
  - error color

## 0.0.8 -2019-04-08

### Added
- Icon
- Typography
  - Headline2
  - Headline3
  - Small

### Fixed
- Button
  -  Fix onclicked animation

## 0.0.7 -2019-04-05
### Changed
-  Calender
  - prevClickしたら前の月に、nextClickしたら次の月、thisMonthClickしたら今月のような当たり前の挙動はComponent内に実装した。
  - propsで渡したonPrevClickなどの関数はyear, month（1はじまり）を`{year, month}`として受け取る。
  - minDate, maxDateを渡した場合、それ以前それ以降の日付はブロックされる。
  - year及びmonthをdefaultYear, defaultMonthに置き換えた。これらを指定しない場合、現在の年月が指定される。
- InputNumber, Add onError props
- Box, Allow prop types of string 

## 0.0.2 -2019-04-04
### Added
- CHANGELOG.md
- Box
- Typography
  - Text
  - Subtitle
  - Title

### Changed
- Integrate ButtonCircle, ButtonRound, ButtonFill, ... into Button

## 0.0.1 - 2019-04-03
### Added 
- Button
- ButtonCircle
- Calendar
- Checkbox
- FlexColumn
- FlexContainer
- FormTitle
- Image
- Input
- InputNumber
- InputZipCode
