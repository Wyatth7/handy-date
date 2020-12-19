class HandyDate {
  /**
   * Gets present date in string form. toString() format
   * @returns {String} Returns the date in string form.
   */
  static currentDateString() {
    const time = new Date().getTime();
    return new Date(time).toString();
  }

  /**
   * Gets present date in miliseconds.
   * @returns {Number} Returns the date in miliseconds.
   */
  static currentDateMili() {
    return Date.now();
  }

  /**
   * Convert miliseconds to a date string
   * @param {Number} mili A number to be interpreted into Date().toString() format.
   * @returns {String} Returns a string
   */
  static miliToDate(mili: number) {
    return new Date(mili).toString();
  }

  /**
   * Convert date string to miliseconds.
   * @param {String} date A String to be interpreted in miliseconds.
   * @returns {Number} Returns a date in milisecond form
   */
  static dateToMili(date: string) {
    const newDate = new Date(date);
    return newDate.setDate(newDate.getDate());
  }

  /**
   * Subtract days from a date.
   * @param {Number} days Number of days to be subtracted from current date.
   * @returns {Number} Returns day in miliseconds
   */
  static subtractDayMili(days: number) {
    const newDate = new Date(this.currentDateString());
    return newDate.setDate(newDate.getDate() - days);
  }

  /**
   * Subtract months from date
   * @param {Number} months Number of months to be subtracted from current date.
   */
  static subtractMonthMili(months: number) {
    const now = new Date(this.currentDateString());
    return now.setMonth(now.getMonth() - months);
  }

  /**
   *  From and to should be in miliseconds
   *  To get this date format, use the static currentDateString() or miliToDate() function in this class.
   * Using other date formats will result in incorrect outputs.
   * @param {Number} from Date to start with.
   * @param {Number} to Date to end with.
   * @param {String} toCheck Date to check for.
   * @returns {Boolean} Returns true if the date is between the specified parameters, or false if the date is not between specified dates.
   */
  static betweenDates(from: number, to: number, toCheck: string) {
    const newFrom = new Date(from).getTime();
    const newTo = new Date(to).getTime();
    const newCheck = new Date(toCheck).getTime();

    if (newCheck >= newFrom && newCheck <= newTo) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Format date in mm/dd/yyyy format
   * @param {String} date Represents a date string returned from miliToDate() and currentDateString(). MUST USE THE FORMATTING FROM miliToDate() and currentDateString()!!!
   * @returns {String} Returns a string in mm/dd/yyyy format.
   */
  static formatDate(date: string) {
    const newDate = date.split(" ");
    const finalDate = [
      newDate.length === 1
        ? `0${this.getMonthFromString(newDate[1])}`
        : this.getMonthFromString(newDate[1]),
      newDate[2],
      newDate[3],
    ];
    return finalDate.join("/");
  }

  /**
   *  Gets the number of the enterd month.
   * @param {String} month One month out of the year
   * @returns {Number} Returns the corresponding number value for a month.
   */
  static getMonthFromString(month: string) {
    return new Date(Date.parse(month + " 1, 2012")).getMonth() + 1;
  }
}

export default HandyDate;
