import React from 'react';

const SectionWrapper = (WrappedComponent) => {
    return (props) => (
        <div className="mr-[8rem] ml-[8rem]">
          <WrappedComponent {...props} />
        </div>
      );
}

export default SectionWrapper