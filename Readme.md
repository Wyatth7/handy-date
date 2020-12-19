# handy-date

A package which uses the Javascript `Date` class to create a simple, non repetative method of creating readable and numerical dates.

# Table of Contents

- [`currentDateString()`](#currentdatestring)
- [`currentDateMili()`](#currentdatemili)
- [`dateToMili()`](#datetomili)
- [`miliToDate()`](#militodate)
- [`subtractDayMili()`](#subtractdaymili)
- [`betweenDates()`](#betweendates)
- [`formatDate()`](#formatdate)
- [`getMonthFromString()`](#getmonthfromstring)

#### `currentDateString()`

Gets present date in string form (`toString()` format).

Returns the date in string form.

```
const now = HandyDate.currentDateString();

// now = "Sat Dec 19 2020 15:23:57 GMT-0500 (Eastern Standard Time)"

```

#### `currentDateMili()`

Gets present date in miliseconds.

Returns the date in miliseconds.

```
const now = Handydate.currentDateMili();

// now = 1608409521469
```

#### `miliToDate(mili)`

Convert miliseconds to a date string.

`mili` A number to be interpreted into `Date().toString()` format.

Returns a string.

```
const mili = 1608409521469;

const date = HandyDate.miliToDate(mili);

// date = "Sat Dec 19 2020 15:25:21 GMT-0500 (Eastern Standard Time)"
```

#### `dateToMili(date)`

Convert date string to miliseconds.

`date` A String to be interpreted in miliseconds.

Returns a date in milisecond form

```
const date = "Sat Dec 19 2020 15:25:21 GMT-0500 (Eastern Standard Time)";

const mili = HandyDate.dateToMili(date);

// mili = 1608409521000
```

#### `subtractDayMili(days)`

Subtract days from a date.

`days` Number of days to be subtracted from current date.

Returns day in miliseconds

```
const days = 1;

const yesterday = HandyDate.subtractDayMili(days);

// yesterday = 1608323556000
```

#### `subtractMonthMili(months)`

Subtract months from a date.

`months` Number of months to be subtracted from current date.

Returns current date last month in miliseconds

```
const months = 1;

const lastMonth = HandyDate.subtractDayMili(months);

// lastMonth = 1605818075000
```

#### `betweenDates(from, to, checkDate)`

To get this date format, use the static `currentDateString()` or `miliToDate()` function in this class.

Using other date formats will result in incorrect outputs.

`from` Date to start with.

`to` Date to end with.

**`from` AND `to` MUST BE IN MILISECONDS**

`toCheck` Date to check for, **MUST BE IN THE `toString()` DATE FORMAT.**

Returns true if the date is between the specified parameters, or false if the date is not between specified dates.

```
const from = 1605818075000 // Last month
const to = 1608323556000 // Yesterday
const toCheck = "Sat Dec 12 2020 15:37:43 GMT-0500 (Eastern Standard Time)" // One week from today

const date = HandyDate.betweenDates(from, to, toCheck);

// date = true
```

#### `formatDate(date)`

Formats date in mm/dd/yyyy format.

`date` Represents a date `string` returned from `miliToDate()` and `currentDateString()`.

**`date` MUST USE THE FORMATTING FROM `miliToDate()` and `currentDateString()`!!!**

Returns a string in mm/dd/yyyy format.

```
  const date = "Sat Dec 12 2020 15:37:43 GMT-0500 (Eastern Standard Time)";

  const formatted = HandyDate.formatDate(date);

  // formatted = "12/12/2020"
```

#### `getMonthFromString(month)`

`month` One month out of the year.

Returns the corresponding number value for a month (1-12).

```
// Months are recognized after 3 letters.
// All methods of [month] shown below will work for any month.
const month = 'january' || 'jan' || 'janu' || ...;

const numericalMonth = getMonthFromString(month);

// numericalMonth = 1
```
