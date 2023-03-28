
// --------------------------------------------------------------------------------
/// <summary>
/// reportWebVitals.js
/// ReactApp
/// created by Mehrdad Soleimanimajd on 26.03.2023
/// </summary>
/// <created>ʆϒʅ, 26.03.2023</created>
/// <changed>ʆϒʅ, 27.03.2023</changed>
// --------------------------------------------------------------------------------


const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
