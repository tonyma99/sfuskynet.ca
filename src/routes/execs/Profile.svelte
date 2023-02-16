<script>
    export let name;
    export let position;
    export let profile = '/default_profile.png';
    export let linkedin;
</script>

<div>
    <img class="profile--photo" src={profile} alt="{name}'s profile picture">
    <p>{name}</p>
    <p>{position}</p>
    <a href="{linkedin}"><i class="fa-brands fa-linkedin-in"></i></a>
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
        width: 80%;
    }

    p {
        line-height: 1;
        margin: 0;
        margin-top: 6px;
    }

    p:nth-of-type(1) {
        font-size: 1rem;
        font-weight: 600;
    }
    
    p:nth-of-type(2) {
        font-size: 0.8rem;
    }

    i {
        font-size: 0.9rem;
    }
</style>
