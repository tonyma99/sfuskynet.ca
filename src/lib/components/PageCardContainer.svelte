<div>
    <slot />
</div>

<style>
    div {
        display: flex;
    }

    @media only screen and (max-width: 768px) {
        div {
            display: inline-block;
            max-width: 320px;
        }
    }
</style>
