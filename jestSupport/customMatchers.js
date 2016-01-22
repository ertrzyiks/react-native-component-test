const isSubset = require('is-subset');
const shallowHelpers = require('react-shallow-renderer-helpers');
const indent = require('indent');
const inspectReactElement = require('inspect-react-element');

//const isSubset = (superset, subset) => {
//    if (
//        (typeof superset !== 'object' || superset === null) ||
//        (typeof subset !== 'object' || subset === null)
//    ) return false;
//
//    return Object.keys(subset).every((key) => {
//        if (!superset.propertyIsEnumerable(key)) return false;
//
//        const subsetItem = subset[key];
//        const supersetItem = superset[key];
//        if (
//            (typeof subsetItem === 'object' && subsetItem !== null) ?
//                !isSubset(supersetItem, subsetItem) :
//            supersetItem !== subsetItem
//        ) return false;
//
//        return true;
//    });
//};

function findMatching(component, expectedChild) {
    let filteredComponents = shallowHelpers.filterType(component, expectedChild.type);
    let found = false;

    filteredComponents.forEach((el) => {
        console.log("isSubset -> ", isSubset);
        console.log("isSubset(el.props, expectedChild.props)-> ", isSubset(el.props, expectedChild.props));
        found = found || isSubset(el.props, expectedChild.props);
    });

    return found;
}

jasmine.getEnv().beforeEach(function () {
    let matchers = {
        toContainReactNodeInTreeLike(expectedChild) {
            const {actual, isNot} = this;

            let actualCode = indent(inspectReactElement(actual), 1);
            let expectedCode = indent(inspectReactElement(expectedChild), 1);

            this.message = () =>
            `Expected \n${actualCode}\n ${isNot ? 'not ' : ''}to contain a ReactNode in its tree like \n${expectedCode}\n`;

            return findMatching(actual, expectedChild);
        }
    };

    this.addMatchers(matchers);
});
