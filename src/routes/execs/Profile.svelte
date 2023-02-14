<script>
    export let name;
    export let position;
    export let profile = '/default_profile.png';
    export let linkedin;
</script>

<div>
    <img class="profile--photo" src={profile} alt="{name}'s profile picture" width="128px">
    <p class="profile--name">{name}</p>
    <p class="profile--position">{position}</p>
    <a href="{linkedin}"><i class="fa-brands fa-linkedin-in"></i></a>
</div>

<style>
    div {
        display: inline-block;
        margin: 1rem;
        width: 168px;
        vertical-align: top;
    }

    .profile--photo {
        border-radius: 50%;
    }

    .profile--name {
        font-size: 1em;
        font-weight: 600;
        margin: 6px 0;
        line-height: 1;
    }
    
    .profile--position {
        font-size: 0.9em;
        margin: 0;
        line-height: 1;
    }
</style>
