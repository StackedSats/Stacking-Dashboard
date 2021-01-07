export default {
  // Alert
  alert: {
    base: "p-4 pl-12 relative rounded leading-5",
    withClose: "pr-12",
    success: "bg-green-50 text-green-900 dark:bg-green-600 dark:text-white",
    danger: "bg-red-50 text-red-900 dark:bg-red-600 dark:text-white",
    warning: "bg-yellow-50 text-yellow-900 dark:bg-yellow-600 dark:text-white",
    neutral: "bg-gray-50 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
    info: "bg-blue-50 text-blue-900 dark:bg-blue-600 dark:text-white",
    icon: {
      base: "h-5 w-5",
      success: "text-green-400 dark:text-green-300",
      danger: "text-red-400 dark:text-red-300",
      warning: "text-yellow-400 dark:text-yellow-100",
      neutral: "text-gray-400 dark:text-gray-500",
      info: "text-blue-400 dark:text-blue-300",
    },
  },
  // Pagination
  pagination: {
    base:
      "flex flex-col justify-between text-xs sm:flex-row text-gray-600 dark:text-gray-400",
  },
  // TableFooter
  tableFooter: {
    base:
      "px-4 py-3 border-t dark:border-gray-700 bg-gray-50 text-gray-500 dark:text-gray-400 dark:bg-gray-800",
  },
  // TableRow
  tableRow: {
    base: "",
  },
  // TableHeader
  tableHeader: {
    base:
      "tracking-wide text-left text-gray-500 bg-gray-50 dark:text-gray-200 dark:bg-gray-700",
  },
  // TableContainer
  tableContainer: {
    base: "w-full overflow-hidden rounded shadow-xs",
  },
  // TableCell
  tableCell: {
    base: "px-4 py-3",
  },
  // TableBody
  tableBody: {
    base:
      "bg-white divide-y dark:divide-white-700 dark:bg-gray-800 text-gray-700 dark:text-gray-300",
  },
  // DropdownItem
  // this is the <li> that lives inside the Dropdown <ul>
  // you're probably looking for the dropdownItem style inside button
  dropdownItem: {
    base: "mb-2 last:mb-0",
  },
  // Dropdown
  dropdown: {
    base:
      "absolute max-w-xs p-2 mt-2 text-gray-600 bg-white border border-gray-100 rounded shadow-md min-w-max-content dark:text-gray-300 dark:border-gray-700 dark:bg-white",
    align: {
      left: "left-0",
      right: "right-0",
    },
  },
  // Avatar
  avatar: {
    base: "relative rounded-full inline-block",
    size: {
      large: "w-16 h-16",
      regular: "w-8 h-8",
      small: "w-6 h-6",
    },
  },
  // Modal
  modal: {
    base:
      "w-full px-10 py-8 overflow-hidden bg-white rounded-t-lg sm:rounded sm:m-4 sm:max-w-2xl",
  },
  // ModalBody
  modalBody: {
    base: "mb-10 text-sm text-gray-900",
  },
  // ModalFooter
  modalFooter: {
    base:
      "flex flex-col items-center justify-end px-10 py-3 -mx-10 -mb-4 space-y-4 sm:space-y-0 sm:space-x-6 sm:flex-row bg-gray-50",
  },
  // ModalHeader
  modalHeader: {
    base: "mt-4 mb-2 text-gray-900",
  },
  // Badge
  badge: {
    base: "inline-flex px-6 py-2 text-xs font-medium leading-5 rounded",
    success:
      "text-success-700 bg-success-100 dark:bg-success-700 dark:text-success-100",
    danger: "text-error-700 bg-error-100 dark:text-error-100 dark:bg-error-700",
    warning:
      "text-warning-700 bg-warning-100 dark:text-white dark:bg-warning-600",
    neutral: "text-gray-700 bg-gray-100 dark:text-gray-100 dark:bg-gray-700",
    primary:
      "text-primary-700 bg-primary-100 dark:text-white dark:bg-primary-600",
  },
  // Backdrop
  backdrop: {
    base:
      "fixed inset-0 z-40 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center",
  },
  // Textarea
  textarea: {
    base:
      "block w-full text-sm dark:text-gray-300 form-textarea focus:outline-none",
    active:
      "focus:border-primary-400 dark:border-gray-600 dark:focus:border-gray-600 dark:bg-gray-700 dark:focus:shadow-outline-gray focus:shadow-outline-primary",
    disabled: "cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800",
    valid:
      "border-green-600 dark:bg-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:shadow-outline-green dark:focus:shadow-outline-green",
    invalid:
      "border-red-600 dark:bg-gray-700 focus:border-red-400 dark:focus:border-red-400 focus:shadow-outline-red dark:focus:shadow-outline-red",
  },
  // Select
  select: {
    base: "block w-full text-sm dark:text-gray-300 focus:outline-none",
    active:
      "focus:border-primary-400 focus:shadow-outline-primary dark:focus:shadow-outline-gray dark:focus:border-primary-400",
    select: "form-select leading-5",
    multiple: "form-multiselect",
    disabled: "cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800",
    valid:
      "border-green-600 focus:border-green-400 dark:focus:border-green-400 focus:shadow-outline-green dark:focus:shadow-outline-green",
    invalid:
      "border-red-600 focus:border-red-400 dark:focus:border-red-400 focus:shadow-outline-red dark:focus:shadow-outline-red",
  },
  // Label
  label: {
    base: "block text-sm text-gray-700 dark:text-gray-400",
    // check and radio get this same style
    check: "inline-flex items-center",
    disabled: "opacity-50 cursor-not-allowed",
  },
  // Input
  input: {
    base:
      "block w-full text-sm focus:outline-none form-input leading-5 border-gray-100",
    active:
      "focus:border-primary-400 lite:border-none focus:shadow-outline-primary",
    disabled: "cursor-not-allowed opacity-50 bg-gray-300",
    valid: "border-green-600 focus:border-green-400 focus:shadow-outline-green",
    invalid: "border-red-600 focus:border-red-400 focus:shadow-outline-red",
    radio:
      "text-primary-600 form-radio focus:border-primary-400 focus:outline-none focus:shadow-outline-primary",
    checkbox:
      "text-primary-600 form-checkbox focus:border-primary-400 focus:outline-none focus:shadow-outline-primary",
  },
  // HelperText
  helperText: {
    base: "text-xs",
    valid: "text-green-600 dark:text-green-400",
    invalid: "text-red-600 dark:text-red-400",
  },
  // Card
  card: {
    base: "min-w-0 rounded shadow-xs overflow-hidden p-3",
    default: "bg-white dark:bg-gray-800",
  },
  cardBody: {
    base: "p-4",
  },
  // Button
  button: {
    base:
      "align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none",
    block: "w-full",
    size: {
      larger: "px-10 py-4 rounded",
      large: "px-5 py-3 rounded",
      regular: "px-4 py-2 rounded text-sm",
      small: "px-3 py-1 rounded-md text-sm",
      icon: {
        larger: "p-4 rounded",
        large: "p-3 rounded",
        regular: "p-2 rounded",
        small: "p-2 rounded-md",
      },
      pagination: "px-3 py-1 rounded-md text-xs",
    },
    // styles applied to the SVG icon
    icon: {
      larger: "h-5 w-5",
      large: "h-5 w-5",
      regular: "h-5 w-5",
      small: "h-3 w-3",
      left: "mr-2 -ml-1",
      right: "ml-2 -mr-1",
    },
    primary: {
      base: "text-white bg-primary-500 border border-transparent",
      active:
        "active:bg-primary-600 hover:bg-primary-700 focus:shadow-outline-primary",
      disabled: "opacity-50 cursor-not-allowed",
    },

    outline: {
      base:
        "text-gray-600 border-gray-300 border dark:text-gray-400 focus:outline-none",
      active:
        "active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:shadow-outline-gray",
      disabled: "opacity-50 cursor-not-allowed bg-gray-300",
    },
    link: {
      base:
        "text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent",
      active:
        "active:bg-transparent hover:bg-gray-100 focus:shadow-outline-gray dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10",
      disabled: "opacity-50 cursor-not-allowed",
    },
    // this is the button that lives inside the DropdownItem
    dropdownItem: {
      base:
        "inline-flex items-center cursor-pointer w-full px-2 py-1 text-sm font-medium transition-colors duration-150 rounded hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-100 dark:hover:text-gray-200",
    },
  },
};
