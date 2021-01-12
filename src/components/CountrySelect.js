import React, { useCallback, useMemo } from "react";
import { Select } from "antd";
import PropTypes from "prop-types";
import classNames from "classnames";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import countries from "../utils/countries";

export default function CountrySelect({ value, onChange, options, ...rest }) {
  const { Option } = Select;
  const selectOptions = countries.map((d) => (
    <Option value={d.code} label={d.name} key={d.code}>
      <div className="demo-option-label-item">
        <span role="img" aria-label={d.emoji}>
          {d.emoji}
        </span>
        {d.name}
      </div>
    </Option>
  ));
  const onChange_ = useCallback(
    (event) => {
      const value = event.target.value;
      onChange(value === "ZZ" ? undefined : value);
    },
    [onChange]
  );

  const selectedOption = useMemo(() => {
    return getSelectedOption(options, value);
  }, [options, value]);

  // "ZZ" means "International".
  // (HTML requires each `<option/>` have some string `value`).
  return (
    <Select {...rest} value={value || "ZZ"} onChange={onChange_}>
      {selectOptions}
    </Select>
  );
}

CountrySelect.propTypes = {
  /**
   * A two-letter country code.
   * Example: "US", "RU", etc.
   */
  value: PropTypes.string,

  /**
   * Updates the `value`.
   */
  onChange: PropTypes.func.isRequired,

  // `<select/>` options.
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
      divider: PropTypes.bool,
    })
  ).isRequired,
};

const DIVIDER_STYLE = {
  fontSize: "1px",
  backgroundColor: "currentColor",
  color: "inherit",
};

function getSelectedOption(options, value) {
  for (const option of options) {
    if (!option.divider && option.value === value) {
      return option;
    }
  }
}
