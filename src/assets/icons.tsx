

type Props = {
    width?: string;
    height?: string;
    fillColor?: string;
    viewBox?: string;
    strokeColor?: string;
  };
  

export  const ArrowDownIcon = (props: Props) => (
    <svg 
        width={props.width || "12"} 
        height={props.height || "13"} 
        viewBox={props.viewBox || "0 0 12 13"} 
        strokeWidth={1}
        fill="none">
      <path d="M2 4.33008L6 8.33008L10 4.33008" stroke="#333" />
    </svg>
  );

  export const SearchIcon = (props: Props) => {
    return (
      <svg
        width={props.width || '16'}
        height={props.height || '16'}
        viewBox={props.viewBox || '0 0 16 16'}
        fill="none"
      >
        <path
          d="M2.00002 2.00197C4.66932 -0.667324 9.00734 -0.667324 11.6766 2.00197C14.0601 4.38539 14.3094 8.10513 12.4279 10.7744L15.6557 14.0022C15.8751 14.2216 15.998 14.5174 15.998 14.8299C15.998 15.1424 15.8751 15.4349 15.6557 15.6576C15.4363 15.8803 15.1404 16 14.8279 16C14.5155 16 14.2229 15.877 14.0002 15.6576L10.7725 12.4299C9.59572 13.2609 8.2162 13.6831 6.83335 13.6831C5.08152 13.6831 3.32968 13.0149 1.9967 11.6819C-0.665955 9.0093 -0.665955 4.67127 2.00002 2.00197ZM3.1801 10.4985C5.19786 12.5163 8.48213 12.5163 10.4999 10.4985C11.4772 9.52122 12.0157 8.22147 12.0157 6.83862C12.0157 5.45577 11.4772 4.15603 10.4999 3.17873C9.48935 2.16818 8.16633 1.66623 6.83999 1.66623C5.51365 1.66623 4.19064 2.17151 3.1801 3.17873C1.16233 5.19981 1.16233 8.48076 3.1801 10.4985Z"
          fill='#333333'
        />
      </svg>
    );
  };

