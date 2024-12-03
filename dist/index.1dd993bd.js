function e(e){return e&&e.__esModule?e.default:e}var r,t,n,i=globalThis,a={},s={},o=i.parcelRequire94c2;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in s){var r=s[e];delete s[e];var t={id:e,exports:{}};return a[e]=t,r.call(t.exports,t,t.exports),t.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,r){s[e]=r},i.parcelRequire94c2=o),(0,o.register)("27Lyk",function(e,r){Object.defineProperty(e.exports,"register",{get:()=>t,set:e=>t=e,enumerable:!0,configurable:!0});var t,n=new Map;t=function(e,r){for(var t=0;t<r.length-1;t+=2)n.set(r[t],{baseUrl:e,path:r[t+1]})}}),o("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.1dd993bd.js","hfd23","icons.c5b0f01c.svg"]'));const c="https://forkify-api.herokuapp.com/api/v2/recipes/",l=async function(e){try{let r=await fetch(e);if(!r.ok)throw Error(`${r.status}: ${r.statusText}`);return await r.json()}catch(e){throw e}},u={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:10}},d=function(e=u.search.page){u.search.page=e;let r=(e-1)*u.search.resultsPerPage,t=e*u.search.resultsPerPage;return u.search.results.slice(r,t)},h=async function(e){try{console.log(`Fetching recipe for ID: ${e}`);let r=await l(`${c}${e}`);console.log(r);let{recipe:t}=r.data;u.recipe={id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookTime:t.cooking_time,ingredients:t.ingredients}}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},p=async function(e){try{u.search.query=e;let r=await l(`${c}?search=${e}`);console.log(r),u.search.results=r.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url}))}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}};p();var g={};g=new URL("icons.c5b0f01c.svg",import.meta.url).toString();class _{_data;render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let r=`
      <div class="spinner">
        <svg>
          <use href="${/*@__PURE__*/e(g)}#icon-loader"></use>
        </svg>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}renderError(r=this._errorMessage){let t=`
      <div class="error">
        <div>
          <svg>
            <use href="${/*@__PURE__*/e(g)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${r}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(r=this._message){let t=`
      <div class="message">
        <div>
          <svg>
            <use href="${/*@__PURE__*/e(g)}#icon-smile"></use>
          </svg>
        </div>
        <p>${r}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}(Fraction=function(e,r){if(void 0!==e&&r)"number"==typeof e&&"number"==typeof r?(this.numerator=e,this.denominator=r):"string"==typeof e&&"string"==typeof r&&(this.numerator=parseInt(e),this.denominator=parseInt(r));else if(void 0===r){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var t,n,i=num.split(" ");if(i[0]&&(t=i[0]),i[1]&&(n=i[1]),t%1==0&&n&&n.match("/"))return new Fraction(t).add(new Fraction(n));if(!t||n)return;if("string"==typeof t&&t.match("/")){var a=t.split("/");this.numerator=a[0],this.denominator=a[1]}else{if("string"==typeof t&&t.match("."))return new Fraction(parseFloat(t));this.numerator=parseInt(t),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),r=this.numerator%this.denominator,t=this.denominator,n=[];return 0!=e&&n.push(e),0!=r&&n.push((0===e?r:Math.abs(r))+"/"+t),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var r=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=r.denominator,r.rescale(e.denominator),e.rescale(td),r.numerator+=e.numerator,r.normalize()},Fraction.prototype.subtract=function(e){var r=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=r.denominator,r.rescale(e.denominator),e.rescale(td),r.numerator-=e.numerator,r.normalize()},Fraction.prototype.multiply=function(e){var r=this.clone();if(e instanceof Fraction)r.numerator*=e.numerator,r.denominator*=e.denominator;else{if("number"!=typeof e)return r.multiply(new Fraction(e));r.numerator*=e}return r.normalize()},Fraction.prototype.divide=function(e){var r=this.clone();if(e instanceof Fraction)r.numerator*=e.denominator,r.denominator*=e.numerator;else{if("number"!=typeof e)return r.divide(new Fraction(e));r.denominator*=e}return r.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var r=this.clone().normalize(),e=e.clone().normalize();return r.numerator===e.numerator&&r.denominator===e.denominator},Fraction.prototype.normalize=(r=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},t=function(e,r){if(!r)return Math.round(e);var t=Math.pow(10,r);return Math.round(e*t)/t},function(){if(r(this.denominator)){var e=t(this.denominator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*n),this.numerator*=n}if(r(this.numerator)){var e=t(this.numerator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*n),this.denominator*=n}var i=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,r){var t=[],n=Fraction.primeFactors(e),i=Fraction.primeFactors(r);return(n.forEach(function(e){var r=i.indexOf(e);r>=0&&(t.push(e),i.splice(r,1))}),0===t.length)?1:function(){var e,r=t[0];for(e=1;e<t.length;e++)r*=t[e];return r}()},Fraction.primeFactors=function(e){for(var r=Math.abs(e),t=[],n=2;n*n<=r;)r%n==0?(t.push(n),r/=n):n++;return 1!=r&&t.push(r),t},console.log(n=Fraction);class f extends _{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="Operation successful!";render(e){this._data=e;let r=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let r=`
      <div class="spinner">
        <svg>
          <use href="${/*@__PURE__*/e(g)}#icon-loader"></use>
        </svg>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}renderError(r=this._errorMessage){let t=`
      <div class="error">
      <div>
        <svg>
          <use href="${/*@__PURE__*/e(g)}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${r}</p>
    </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(r=this._message){let t=`
      <div class="message">
        <div>
          <svg>
            <use href="${/*@__PURE__*/e(g)}#icon-smile"></use>
          </svg>
        </div>
        <p>${r}</p>
      </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}addHandlerRender(e){["hashchange","load"].forEach(r=>window.addEventListener(r,e))}_generateMarkup(){return`
      <figure class="recipe__fig">
        <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>
      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${/*@__PURE__*/e(g)}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookTime}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${/*@__PURE__*/e(g)}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
          <span class="recipe__info-text">servings</span>
          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="${/*@__PURE__*/e(g)}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--increase-servings">
              <svg>
                <use href="${/*@__PURE__*/e(g)}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>
        <div class="recipe__user-generated">
          <svg>
            <use href="${/*@__PURE__*/e(g)}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round">
          <svg>
            <use href="${/*@__PURE__*/e(g)}#icon-bookmark-fill"></use>
          </svg>
        </button>
      </div>
      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${this._data.ingredients.map(r=>`
              <li class="recipe__ingredient">
                <svg class="recipe__icon">
                  <use href="${/*@__PURE__*/e(g)}#icon-check"></use>
                </svg>
                <div class="recipe__quantity">${r.quantity?new n(r.quantity).toString():""}</div>
                <div class="recipe__description">
                  ${r.description}
                </div>
              </li>
            `).join("")}
        </ul>
      </div>
      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${this._data.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${/*@__PURE__*/e(g)}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `}}var m=new f;class v{#e=document.querySelector(".search");getQuery(){let e=this.#e.querySelector(".search__field").value;return this.#r(),e}#r(){this.#e.querySelector(".search__field").value=""}addHandlerSearch(e){this.#e.addEventListener("submit",function(r){r.preventDefault(),e()})}}var b=new v;class y extends _{_parentElement=document.querySelector(".results");_errorMessage="No recipes found for your query!";_message="";_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(e){return`
      <li class="preview">
        <a class="preview__link" href="#${e.id}">
          <figure class="preview__fig">
            <img src="${e.image}" alt="${e.title}" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${e.title}</h4>
            <p class="preview__publisher">${e.publisher}</p>
          </div>
        </a>
      </li>
    `}}var $=new y;class w extends _{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(r){let t=r.target.closest(".btn--inline");t&&e(+t.dataset.goto)})}_generateMarkup(){let r=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return 1===r&&t>1?`
            <button data-goto="${r+1}" class="btn--inline pagination__btn--next">
          <span>Page ${r+1}</span>
          <svg class="search__icon">
            <use href="${/*@__PURE__*/e(g)}#icon-arrow-right"></use>
          </svg>
        </button>
            `:r===t&&t>1?`
            <button data-goto="${r-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href ="${/*@__PURE__*/e(g)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${r-1}</span>
        </button>
        `:r<t?`
            <button data-goto="${r-1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${/*@__PURE__*/e(g)}#icon-arrow-left"></use>
          </svg>
          <span>Page ${r-1}</span>
        </button>
        <button  data-goto="${r+1}" class="btn--inline pagination__btn--next">
          <span>Page ${r+1}</span>
          <svg class="search__icon">
            <use href="${/*@__PURE__*/e(g)}#icon-arrow-right"></use>
          </svg>
        </button>
            `:""}}var F=new w;const M=async function(){try{let e=window.location.hash.slice(1);if(!e)return;m.renderSpinner(),await h(e),m.render(u.recipe)}catch(e){m.renderError(),console.error(e)}},E=async function(){try{let e=b.getQuery();if(!e)return;$.renderSpinner(),await p(e),$.render(d()),F.render(u.search)}catch(e){$.renderError(),console.error(e)}};m.addHandlerRender(M),b.addHandlerSearch(E),F.addHandlerClick(function(e){$.render(d(e)),F.render(u.search)});
//# sourceMappingURL=index.1dd993bd.js.map
