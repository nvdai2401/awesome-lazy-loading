import React from 'react';

function elementInViewport(el) {
  const rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

class LazyImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, { passive: true });
  }

  handleScroll() {
    if (!this.state.loaded && elementInViewport(this.imgElm)) {
      const { src } = this.props;
      const imgLoader = new Image();
      imgLoader.src = src;
      imgLoader.onload = () => {
        if (this.imgElm) {
          this.imgElm.setAttribute(`src`, `${src}`);
          this.setState({
            loaded: true,
          });
        }
      };
    }
  }

  render() {
    const { width, height, className, alt, placeHolder } = this.props;
    return (
      <img
        src={placeHolder}
        width={width || '100%'}
        height={height || '100%'}
        ref={(imgElm) => (this.imgElm = imgElm)}
        className={`${className}`}
        alt={alt}
      />
    );
  }
}

export default LazyImage;
