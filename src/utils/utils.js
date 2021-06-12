export const boldSubstr = (text,substr) => {
    const searchedVal = text
      .toLowerCase()
      .indexOf(substr.trim().toLowerCase());

    const substrLength = substr.trim().length;

    const foundSubstr = text.substr(searchedVal, substrLength);

    return text.replace(foundSubstr, `<strong>${foundSubstr}</strong>`);
  };