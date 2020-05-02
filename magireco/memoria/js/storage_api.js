let storage_api = (() => {

  let module = {};

  module.profiles = {};
  module.lists = {};
  module.lists = {};
  module.settings = {};

  let userId = null;

  module.startUp = (_userId) => {
    userId = _userId;
    loadUserName();
    database.onMessageUpdate(userId, message => {
      if (message) {
        messageModal.style.display = "block";
        messageModalText.value = message;
        messageModalTitle.innerHTML = `Message`;
        messageModalList.innerHTML = "";
      } else {
        database.onSettingUpdate(userId, loadSettings);
        database.onProfileUpdate(userId, loadProfiles);
        database.onListUpdate(userId, loadLists);
      }
    });
  };

  module.listExists = (name) => {
    if (Object.entries(module.lists).some((key, list) => list.name === name)) return true;
    return false;
  };

  module.createList = (name) => {
    database.createList(userId, { name: name, memoriaList: true, selectedProfile: "Default", selectedBackground: true });
  };

  module.updateList = (listId, name, memoriaList, selectedProfile, selectedBackground) => {
    if (memoriaList.length == 0) memoriaList = true;
    if (!selectedBackground) selectedBackground = true;
    database.updateList(userId, listId, { name: name, memoriaList: memoriaList, selectedProfile: selectedProfile, selectedBackground: selectedBackground });
  };

  module.deleteList = (listId) => {
    database.deleteList(userId, listId);
  };

  module.duplicateList = (list, newName) => {
    let selectedProfile = profile_api.getSelectedProfile() || "Default";
    let selectedBackground = background_api.getSelectedBackground() || true;
    database.createList(userId, { name: newName, memoriaList: list.memoriaList, selectedProfile: selectedProfile, selectedBackground: selectedBackground });
  };

  module.manualCreateList = (name, memoriaList, selectedProfile, selectedBackground) => {
    database.createList(userId, { name: name, memoriaList: memoriaList, selectedProfile: selectedProfile, selectedBackground: selectedBackground });
  }

  module.updateProfile = (name, profile) => {
    database.updateProfile(userId, name, profile);
  };

  module.profileExists = (name) => {
    if (module.profiles[name]) return true;
    return false;
  };

  module.deleteProfile = (id) => {
    database.deleteProfile(userId, id);
    Object.entries(module.lists).forEach(([id, list]) => {
      if (list.selectedProfile === id) database.updateListProfile(id, "10");
    });
  };

  module.updateSettings = (settingName, newSettings) => {
    database.updateSettings(userId, settingName, newSettings);
  };

  const loadUserName = () => {
    database.onAuthStateChanged(user => {
      let name = user && user.displayName ? user.displayName : "Anonymous";
      header_username.innerHTML = "Welcome " + name;
    });
  };

  const loadSettings = (snapshot) => {
    module.settings = snapshot.val() ? snapshot.val() : {};
    // init expanded tabs
    if (!module.settings.expanded_tabs) database.initSettings(userId);
    // expand tabs
    Object.entries(module.settings.expanded_tabs).forEach(([tab_id, expanded]) => {
      let tab = document.querySelector(`#${tab_id}`);
      if (tab) {
        let tab_contents = tab.querySelector(".tab_contents");
        if (expanded && tab_contents.classList.contains("hidden")) tab_contents.classList.remove("hidden");
        else if (!expanded && !tab_contents.classList.contains("hidden")) tab_contents.classList.add("hidden");
      }
    });
    // display settings
    if (typeof character_list_content !== 'undefined') {
      character_list_content.style.padding = `${module.settings.padding_y}px ${module.settings.padding_x}px`;
      document.querySelectorAll(".character_row").forEach(character_row => character_row.style.justifyContent = character_list_api.direction_to_flex[module.settings.display_alignment]);
      display_alignment_select.value = module.settings.display_alignment;
      display_padding_x_field.value = module.settings.padding_x;
      display_padding_y_field.value = module.settings.padding_y;
    }
  };

  const loadProfiles = (snapshot) => {
    // get the previous profile.
    let previous = profile_api.getSelectedProfile();
    // get the settings.
    let profiles = snapshot.val();
    let filtered = Object.keys(profiles)
      .filter(key => profiles[key].type == "memoria")
      .reduce((obj, key) => {
        return {
          ...obj,
          [key]: profiles[key]
        };
      }, {});
    module.profiles = filtered;
    // update the profile select.
    profile_api.setProfiles(module.profiles, previous);
  };

  const loadLists = (snapshot) => {
    let lists = snapshot.val() ? snapshot.val() : {};
    let filtered = Object.keys(lists)
      .filter(key => lists[key].memoriaList)
      .reduce((obj, key) => {
        return {
          ...obj,
          [key]: lists[key]
        };
      }, {});
    module.memoria_lists = filtered;
    memoria_list_api.setLists(module.memoria_lists);
  };

  return module;
})();