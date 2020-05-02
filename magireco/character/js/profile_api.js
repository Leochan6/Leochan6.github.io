let profile_api = (function () {

  let module = {};

  module.selectedProfile = null;

  // loads, sets, and selects the profiles
  module.setProfiles = (profiles, previous) => {
    profile_select.innerHTML = "";
    Object.entries(profiles).forEach(([id, profile]) => {
      console.log();
      profile_select.options.add(new Option(profile.name, id, false));
    });
    if (module.selectedProfile !== null) profile_select.value = module.selectedProfile;
    else if (previous && previous !== "0") profile_select.value = previous;
    else {
      // set sort settings with default if no list selected.
      profile_select.value = "0";
      profile_api.setProfileFields(storage_api.profiles["0"].settings);
    }
  };

  module.getSortProperties = () => {
    let properties = {
      group_by: group_by_select.value,
      group_dir: group_dir_select.classList.contains("ascend") ? 1 : -1,
      sort_by_1: sort_by_1_select.value,
      sort_dir_1: sort_dir_1_select.classList.contains("ascend") ? 1 : -1,
      sort_by_2: sort_by_2_select.value,
      sort_dir_2: sort_dir_2_select.classList.contains("ascend") ? 1 : -1,
      sort_id_dir: sort_id_dir_select.classList.contains("ascend") ? 1 : -1,
      displays_per_row: parseInt(displays_per_row.value)
    };
    return properties;
  };

  module.saveProfile = () => {
    let profileName = new_profile_field.value;
    if (storage_api.profileExists(profileName)) {
      profile_error_text.innerHTML = `The sorting profile ${profileName} already exists.`;
      return;
    }
    new_profile_field.value = "";
    let properties = module.getSortProperties();
    storage_api.createProfile(profileName, properties);
    new_profile_row.style.visibility = "collapse";
    module.selectedProfile = profileName;
  };

  module.updateProfile = () => {
    let profileId = module.getSelectedProfileId();
    let properties = module.getSortProperties();
    storage_api.updateProfile(profileId, properties);
    new_profile_row.style.visibility = "collapse";
  };

  module.checkProfile = () => {
    let profileName = new_profile_field.value;
    if (storage_api.profileExists(profileName)) profile_error_text.innerHTML = `The sorting profile ${profileName} already exists.`;
    else profile_error_text.innerHTML = "";
  };

  module.deleteProfile = () => {
    let profileId = module.getSelectedProfileId();
    if (storage_api.profiles[profileId].name !== "Default" && storage_api.profiles[profileId].name !== "Custom") {
      storage_api.deleteProfile(profileId);
      module.selectedProfile = "0";
      profile_select.value = "0";
      let listId = character_list_api.getListId();
      if (listId) storage_api.updateList(listId, character_list_api.getListName(), storage_api.lists[listId].characterList, "0", background_api.getSelectedBackground() || "");
    }
  };

  module.setProfile = () => {
    let profileId = module.getSelectedProfileId();
    if (storage_api.profiles[profileId].settings !== true) module.setProfileFields(storage_api.profiles[profileId].settings);
  };

  module.setProfileFields = (profile) => {
    setSelectedText(group_by_select, profile.group_by);
    setSelectedDirection(group_dir_select, profile.group_dir);
    setSelectedText(sort_by_1_select, profile.sort_by_1);
    setSelectedDirection(sort_dir_1_select, profile.sort_dir_1);
    setSelectedText(sort_by_2_select, profile.sort_by_2);
    setSelectedDirection(sort_dir_2_select, profile.sort_dir_2);
    setSelectedDirection(sort_id_dir_select, profile.sort_id_dir);
    displays_per_row.value = profile.displays_per_row;
  };

  module.getSelectedProfileId = () => {
    return profile_select.value;
  };

  module.getSelectedProfileName = () => {
    return profile_select.options[profile_select.selectedIndex].text;
  };

  module.changeToCustom = () => {
    profile_select.value = "1";
  };

  module.resetProfiles = () => {
    if (window.confirm("Are you sure you want to reset the profiles?")) {
      storage_api.resetSorting();
    }
  };

  const setSelectedText = (element, text) => {
    for (let i = 0; i < element.options.length; i++) {
      if (element.options[i].value === text) {
        element.selectedIndex = i;
        break;
      }
    }
  };

  const setSelectedDirection = (element, direction) => {
    if (element.classList.contains("ascend") && direction === -1) {
      element.classList.replace("ascend", "descend");
    }
    else if (element.classList.contains("descend") && direction === 1) {
      element.classList.replace("descend", "ascend");
    }
  };

  return module;
})();