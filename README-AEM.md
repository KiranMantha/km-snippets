## Load aem components with experience fragment

```typescript
//experienceFragmentMapping.ts
export const componentMapping = {
  <aem-component-name>: <angular-or-react-component>
}

//experienceFragment.ts (react component)
import { componentMapping } from './experienceFragmentMapping'
function ExperienceFragment(props) {
  const renderComponent = () => {
    if (props && props.cqItems && props.cqItems.root) {
      const componentsKeys = props.cqItems.root[':items'] ? Object.keys(props.cqItems.root[':items']) : [];

      const getUniqueComponentName = eachComponent => {
        if (componentMapping[eachComponent]) {
          return componentMapping[eachComponent];
        } else {
          return componentMapping[eachComponent.split('_')[0]];
        }
      };

      return (
        <div className="ExperienceFragment">
          {componentsKeys.length &&
            componentsKeys.map(eachComponent => {
              const ComponentMap = getUniqueComponentName(eachComponent) || false;
              const componentProps = props.cqItems.root[':items'][eachComponent];
              if (ComponentMap) {
                return <ComponentMap {...componentProps} />;
              } else {
                return null;
              }
            })}
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <h1>Welcome to ExperienceFragment!</h1>
      {renderComponent()}
    </div>
  );
}

export default ExperienceFragment;
```
