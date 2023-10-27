# SOLID
1. Single Responsibility
    - dont use useState and useEffect in Rendering page, instead use custom hook that includes both useState and useEffect that handles the hook.
    eg: useProducst to fetch and setprodcuts

2. Open-Closed
    - software entities should be open for extension but closed for modification.
        eg: If we have a button components that renders button depending the type we passed as prop that check condition and render icon or another component inside button component.
        - It better to pass that icon_component to that button component. So that button copoenent have to only render a component what is passed.

3. Liskov Substitution
    - subtype objects shoud be substituable for supertype objects.
        eg: If we have a component(a) that have multiple props and comp(a) consist of another compoent(b).
        -  If we need to pass some or all props from comp(a) to comp(b), then dont pass individually. Use {...}
            const Comp_A=(a,b, ...restProps)={
                render (
                     <Comp_B a={a} b={b} {...restProps} />
                )
            }

4. Interface Segregation
    - clients should not depend upon interfaces that they dont use.
        eg: If we have a Comp_A that passes objects to comp_B. But comp_B only used single value of that object.
        - Instead of passing object to comp_B, only pass the values that are really used.
        -   const Comp_A=(product)={
                render (
                     //<Comp_B product={product} />
                     <Comp_B image_url={product.image_url} />
                )
            }
            const Comp_B=(image_url)={
                render (
                     <div>{image_url}</div>
                )
            }

5. Dependecy Inversion
    - one entity should depend upon abstractions not concretions.
    - dont create concret component that connot be used for another components.
    - eg: If we have a FORM component that have the function that handles when submit. its like concrete we cannot use this form for other use.
    - Instead , we convert that form component to re-usable component that takes a handleSubmit function as props.
        eg: export function ConnectedForm(){
            const handleSubmit = async (email,password)=.{
                await axios.post('...',{email,password})
            }
            return <Form onSubmit={handleSubmit} />
        }