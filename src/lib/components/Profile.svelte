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
        display: inline-block;
        margin: 0.5rem;
        width: 10rem;
        vertical-align: top;
    }

    img {
        border-radius: 50%;
    }

    p {
        line-height: 1;
        margin: 0;
        margin-top: 6px;
    }

    p:nth-of-type(1) {
        font-weight: bold;
    }
    
    p:nth-of-type(2) {
        font-size: 0.9rem;
        color: #444;
    }

    i {
        font-size: 0.9rem;
    }

    i:hover {
        color: #777;
    }
</style>
