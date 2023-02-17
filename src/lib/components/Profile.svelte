<script>
    export let name;
    export let position;
    export let profile = '/images/default_profile.png';
    export let linkedin;
</script>

<div>
    <img src={profile} alt="{name}'s profile picture" width=128 height=128>
    <p>{name}</p>
    <p>{position}</p>
    <a href={linkedin} aria-label={`${name}'s LinkedIn profile'`}><i class="fa-brands fa-linkedin-in"></i></a>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        justify-content: top;
        align-items: center;
        width: 10rem;
        gap: 6px;
    }

    img {
        border-radius: 50%;
        margin-bottom: 6px;
    }

    p {
        line-height: 1;
        margin: 0;
    }

    p:nth-of-type(1) {
        font-weight: bold;
    }
    
    p:nth-of-type(2) {
        font-size: 0.9rem;
        color: #444;
    }
</style>
