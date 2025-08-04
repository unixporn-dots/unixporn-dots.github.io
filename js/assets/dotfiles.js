const dotfiles = [
	{
		author: "rklyz",
		description: "My cozy little dotfiles",
		link: "https://github.com/rklyz/MyRice",
		tags: ['awesome', 'picom', 'wezterm', 'zsh'],
		title: "rklyz\'s dotfiles",
		wm: "awesome",
		images: ['./assets/dotfiles/rklyz_dotfiles/thumbnail.png']
	},
	{
		author: "Miusaky",
		description: "Dotfiles for bspwm",
		link: "https://github.com/Miusaky/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/v95di4/bspwm_switched_to_arch/",
		tags: ['bspwm', 'SAGA'],
		title: "SAGA bspwm",
		wm: "bspwm",
		images: ['./assets/dotfiles/SAGA_bspwm/thumbnail.png']
	},
	{
		author: "b4skyx",
		description: "A low contrast setup for my colorblind eyes",
		link: "https://github.com/b4skyx/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/lhljmi/bspwm_serenade_a_low_contrast_setup_for_my/",
		tags: ['bspwm', 'polybar', 'rofi', 'st'],
		title: "Serenade",
		wm: "bspwm",
		images: ['./assets/dotfiles/Serenade/thumbnail.png']
	},
	{
		author: "LucyUwI",
		description: "My personal dotfiles for KDE",
		link: "https://github.com/LucyUwI/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/pilgqs/kde_my_current_kde_setup/",
		tags: ['kde', 'kvantum', 'latte'],
		title: "LucyUwI\'s Dotfiles",
		wm: "kde",
		images: ['./assets/dotfiles/LucyUwIs_Dotfiles/thumbnail.png']
	},
	{
		author: "DebianOwO",
		description: "So if you\'re here you probably came from my unixporn rice. I tried my best to guide you through",
		link: "https://github.com/DebianOWO/Retro-Spectronum",
		reddit: "https://www.reddit.com/r/unixporn/comments/uve34a/polybar_i3gaps_my_first_arch_rice/",
		tags: ['i3-gaps', 'polybar', 'fish', 'alacritty'],
		title: "Retro-Spectronum",
		wm: "i3-gaps",
		images: ['./assets/dotfiles/Retro-Spectronum/thumbnail.png']
	},
	{
		author: "yous3fghazyv11",
		description: "my personal dotfiles",
		link: "https://github.com/yous3fghazyv11/Dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/1lya9uw/hyprland_gruvbox_is_superior/",
		tags: ['hyprland', 'zsh', 'dunst', 'eww', 'kitty', 'waybar'],
		title: "yous3fghazyv11\'s Dotfiles",
		wm: "hyprland",
		images: ['./assets/dotfiles/yous3fghazyv11_dotfiles/thumbnail.webp', './assets/dotfiles/yous3fghazyv11_dotfiles/1.webp', './assets/dotfiles/yous3fghazyv11_dotfiles/2.webp']
	},
	{
		author: "alba4k",
		description: "GG\' Integrated Developing & Living Environment",
		link: "https://github.com/weebcyberpunk/ggidle",
		reddit: "https://www.reddit.com/r/unixporn/comments/vjdqkx/dwm_few_improvements_on_my_rice_removed_gaps_for/?utm_source=share&utm_medium=web2x&context=3",
		tags: ['dwm', 'neovim', 'mpd'],
		title: "GG\'s IDLE",
		wm: "dwm",
		images: ['./assets/dotfiles/GGs_IDLE/thumbnail.png']
	},
	{
		author: "mahancoder",
		description: "A minimalistic classic rice",
		link: "https://github.com/mahancoder/.dotfiles",
		tags: ['qtile', 'alacritty', 'ulauncher', 'deadd-notification-center', 'rounded-corners', 'dark', 'dracula', 'arch'],
		title: "Mahancoder\'s dotfiles",
		wm: "qtile",
		images: ['./assets/dotfiles/Mahancoders_dotfiles/thumbnail.png']
	},
	{
		author: "drahenprofi",
		description: "Arch Linux dotfiles",
		link: "https://github.com/drahenprofi/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/kucuzs/awesome_420_rice_it/",
		tags: ['awesomewm', 'rofi', 'kitty', 'sp'],
		title: "drahenprofi\'s dotfiles",
		wm: "awesomewm",
		images: ['./assets/dotfiles/drahenprofis_dotfiles/thumbnail.png']
	},
	{
		author: "potamides",
		description: "My personal dotfiles for most of the programs I use on a daily basis.",
		link: "https://github.com/potamides/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/i60b10/awesome_streets_of_gruvbox/",
		tags: ['awesomewm', 'alacritty', 'conky'],
		title: "Potamides\' Dotfiles",
		wm: "awesomewm",
		images: ['./assets/dotfiles/Potamides_Dotfiles/thumbnail.png']
	},
	{
		author: "manilarome",
		description: "Yes GNawesOME is a weird name. GNawesOME was meant to be a GNOME clone. Instead it became a hybrid of macOS iOS GNOME and Deepin. I regret nothing.",
		link: "https://github.com/manilarome/the-glorious-dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/fhd70d/awesomewm_floppier/?utm_source=share&utm_medium=web2x&context=3",
		tags: ['awesomewm', 'rofi', 'kitty', 'fish'],
		title: "GNawesoME",
		wm: "awesomewm",
		images: ['./assets/dotfiles/GNawesoME/thumbnail.webp']
	},
	{
		author: "Manas140",
		title: "AweDots",
		description: "Config files for my setup",
		link: "https://github.com/Manas140/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/13ra3ju/awesome_oh_i_forgot_about_reddit/",
		wm: "awesomewm",
		tags: ['awesomewm', 'alacritty', 'rofi'],
		images: ['./assets/dotfiles/AweDots/thumbnail.png']
	},
	{
		author: "alba4k",
		description: "Just a random catppuccin rice",
		link: "https://github.com/alba4k/.dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/vf2tej/i3gaps_well_i_like_purple_anybody_here_good_with/",
		tags: ['i3-gaps', 'polybar'],
		title: "alba4k\'s dotfiles",
		wm: "i3-gaps",
		images: ['./assets/dotfiles/alba4ks_dotfiles/thumbnail.png']
	},
	{
		author: "leetApe",
		description: "Cozy Rainy Weather Rice ʕु•̫͡•ʔु",
		link: "https://github.com/leetApe/new-bspdots",
		reddit: "https://www.reddit.com/r/unixporn/comments/vf0cox/bspwm_ricing_while_its_raining_outside_is_so_chill/",
		tags: ['bspwm', 'alacritty', 'polybar', 'rofi'],
		title: "leetApe\'s dotfiles",
		wm: "bspwm",
		images: ['./assets/dotfiles/leetApes_dotfiles/thumbnail.png', './assets/dotfiles/leetApes_dotfiles/1.png']
	},
	{
		author: "fahimfaisal42",
		description: "My Arch Conf",
		link: "https://github.com/fahimfaisal42/.dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/uumk8j/bspwm_lost_in_the_oblivion/",
		tags: ['bspwm', 'dunst', 'kitty', 'polybar'],
		title: "fahimfaisal42\'s dotfiles",
		wm: "bspwm",
		images: ['./assets/dotfiles/fahimfaisal42s_dotfiles/thumbnail.png']
	},
	{
		author: "beyond9thousand",
		description: "Opinionated BSPWM setup",
		link: "https://github.com/beyond9thousand/dotfiles",
		tags: ['bspwm', 'nvim', 'rofi', 'ranger', 'dunst', 'blender', 'dmenu', 'polybar', 'alacritty', 'tokyonight'],
		title: "b9k\'s dotfiles",
		wm: "bspwm",
		images: ['./assets/dotfiles/b9ks_dotfiles/thumbnail.png']
	},
	{
		author: "p3nguin-kun",
		title: "penguinRice",
		description: "Minimal Linux setup for lazy people",
		link: "https://github.com/p3nguin-kun/penguinRice",
		reddit: "https://www.reddit.com/r/unixporn/comments/18kc3u8/bspwm/",
		tags: ['bspwm', 'alacritty', 'polybar'],
		wm: "bspwm",
		images: ['./assets/dotfiles/penguinRice/thumbnail.png', './assets/dotfiles/penguinRice/img1.png']
	},
	{
		author: "ilham25",
		description: "Here is my aether dotfiles openbox version",
		link: "https://github.com/ilham25/dotfiles-openbox",
		reddit: "https://www.reddit.com/r/unixporn/comments/qy1you/openbox_aether_desktop/?utm_source=share&utm_medium=web2x&context=3",
		tags: ['openbox', 'urxvt', 'dunst', 'tint2', 'rofi'],
		title: "Aether Desktop",
		wm: "openbox",
		images: ['./assets/dotfiles/Aether_Desktop/thumbnail.png']
	},
	{
		author: "ahmadhabibi14",
		description: "Xfce rice with Tokyo Night color scheme",
		link: "https://github.com/ahmadhabibi14/dotfile",
		tags: ['xfce', 'plank', 'tokyonight', 'alacritty'],
		title: "ahmadhabibi14 dotfiles",
		wm: "xfwm",
		images: ['./assets/dotfiles/ahmadhabibi14_dotfile/thumbnail.png']
	},
	{
		author: "obliviousofcraps",
		description: "These are some of my ridiculously shit dotfiles that I use in my unproductive daily life.",
		link: "https://github.com/obliviousofcraps/mf-dots",
		reddit: "https://www.reddit.com/r/unixporn/comments/mioauy/openbox_eww_its_pastel/",
		tags: ['openbox', 'rofi', 'kitty', 'slim', 'eww', 'tint2', 'dunst'],
		title: "mf-dots",
		wm: "openbox",
		images: ['./assets/dotfiles/mf-dots/thumbnail.png']
	},
	{
		author: "ChocolateBread799",
		description: "My Awesomewm dotfiles",
		link: "https://github.com/ChocolateBread799/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/td7ob3/awesomewm_its_not_an_apple_ad/?utm_source=share&utm_medium=web2x&context=3",
		tags: ['awesomewm', 'hilbish', 'wezterm'],
		title: "ChocolateBread799\'s dotfiles",
		wm: "awesomewm",
		images: ['./assets/dotfiles/ChocolateBread799s_dotfiles/thumbnail.png']
	},
	{
		author: "Syndrizzle",
		description: "A collection of personal configuration files for various rices I have made.",
		link: "https://github.com/Syndrizzle/hotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/vnexhe/bspwm_hotfiles_tokyo_night_inspired_by_rxyhns_rice/",
		tags: ['bspwm', 'kitty', 'eww', 'rofi', 'dunst', 'conky', 'slim', 'polybar', 'tokyonight'],
		title: "Hotfiles",
		wm: "bspwm",
		images: ['./assets/dotfiles/Hotfiles/thumbnail.png']
	},
	{
		author: "Rashad-707",
		description: "A backup of my Linux setup",
		link: "https://github.com/Rashad-707/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/pq8m5r/dwm_widgets_two_layout_do_you_like_light_theme/?utm_source=share&utm_medium=web2x&context=3",
		tags: ['dwm', 'kde', 'dunst', 'eww', 'polybar', 'rofi'],
		title: "Rashad-707\'s dotfiles",
		wm: "dwm",
		images: ['./assets/dotfiles/Rashad-707s_dotfiles/thumbnail.png']
	},
	{
		author: "3r3bu5x9",
		description: "A dark themed startpage and dark themes for Firefox and Linux inspired by Material design and Adapta.",
		link: "https://github.com/3r3bu5x9/prismatic-night",
		reddit: "https://www.reddit.com/r/unixporn/comments/gpqbfe/openbox_been_working_on_this_for_quite_some_time/",
		tags: ['openbox', 'urxvt', 'firefox', 'tint2', 'jgmenu'],
		title: "Prismatic Night",
		wm: "openbox",
		images: ['./assets/dotfiles/Prismatic_Night/thumbnail.png']
	},
	{
		author: "manilarome",
		description: "A setup full of borders and lines. Awesome right?",
		link: "https://github.com/manilarome/the-glorious-dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/fhd70d/awesomewm_floppier/?utm_source=share&utm_medium=web2x&context=3",
		tags: ['awesomewm', 'rofi', 'kitty', 'fish'],
		title: "Linear",
		wm: "awesomewm",
		images: ['./assets/dotfiles/Linear/thumbnail.webp']
	},
	{
		author: "elenapan",
		description: "There is no place like ~/",
		link: "https://github.com/elenapan/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/hpakeu/awesome_afternoon_in_a_perfect_world/?utm_source=share&utm_medium=web2x&context=3",
		tags: ['awesomewm', 'zsh', 'kitty', 'rofi'],
		title: "Elena\'s Dotfiles",
		wm: "awesomewm",
		images: ['./assets/dotfiles/Elenas_Dotfiles/thumbnail.png']
	},
	{
		author: "SwiftyChicken",
		description: "My dotfiles",
		link: "https://github.com/SwiftyChicken/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/haogs0/bspwm_i_have_spent_too_much_time_on_this/",
		tags: ['bspwm', 'dunst', 'rofi', 'polybar', 'eww'],
		title: "SwiftyChicken\'s dotfiles",
		wm: "bspwm",
		images: ['./assets/dotfiles/SwiftyChickens_dotfiles/thumbnail.png']
	},
	{
		author: "Miusaky",
		description: "Dotfiles for dwm",
		link: "https://github.com/Miusaky/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/vuaga4/dwm_saga/",
		tags: ['dwm', 'SAGA'],
		title: "SAGA dwm",
		wm: "dwm",
		images: ['./assets/dotfiles/SAGA_dwm/thumbnail.png']
	},
	{
		author: "janleigh",
		description: "My desktop configuration files.",
		link: "https://github.com/janleigh/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/wda0b8/bspwm_gloomy_and_simple/",
		tags: ['bspwm', 'alacritty', 'zsh', 'eww', 'picom', 'dunst', 'thunar', 'rofi', 'firefox'],
		title: "janleigh\'s dotfiles",
		wm: "bspwm",
		images: ['./assets/dotfiles/janleigh_dotfiles/thumbnail.png']
	},
	{
		author: "Amog-OS",
		description: "A parody OS inspired by Among Us",
		link: "https://github.com/Amog-OS/AmogOS",
		reddit: "https://www.reddit.com/r/unixporn/comments/nhomed/cinnamon_amogos_is_complete_icon_art_idea_by_u/?utm_source=share&utm_medium=web2x&context=3",
		tags: ['openbox', 'lxde', 'xfce4-panel'],
		title: "AmogOS",
		wm: "openbox",
		images: ['./assets/dotfiles/AmogOS/thumbnail.webp']
	},
	{
		author: "CodeHeister",
		description: "First rice for i3-gaps",
		link: "https://github.com/CodeHeister/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/sjroxe/i3gaps_my_onedarknord_rice_after_a_month_what_do/?utm_source=share&utm_medium=web2x&context=3",
		tags: ['i3-gaps', 'rofi', 'nvim', 'ranger', 'dunst', 'flameshot'],
		title: "CodeHeister\'s Dotfiles",
		wm: "i3-gaps",
		images: ['./assets/dotfiles/CodeHeisters_Dotfiles/thumbnail.png', './assets/dotfiles/CodeHeisters_Dotfiles/1.png', './assets/dotfiles/CodeHeisters_Dotfiles/2.png', './assets/dotfiles/CodeHeisters_Dotfiles/3.png']
	},
	{
		author: "k-vernooy",
		description: "An organizational repository for my dotfiles and scripts",
		link: "https://github.com/k-vernooy/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/vw6pm0/i3gaps_fresh_summer_rice/",
		tags: ['i3-gaps', 'polybar', 'dunst', 'urxvt', 'rofi'],
		title: "k-vernooy\'s dotfiles",
		wm: "i3-gaps",
		images: ['./assets/dotfiles/k-vernooys_dotfiles/thumbnail.png']
	},
	{
		author: "manilarome",
		description: "Floppy was meant to be a clone of the infamous Flurry Desktop. I named it Floppy because I thought it would flop when I first posted it on r/unixporn. This is my favorite.",
		link: "https://github.com/manilarome/the-glorious-dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/fhd70d/awesomewm_floppier/?utm_source=share&utm_medium=web2x&context=3",
		tags: ['awesomewm', 'rofi', 'kitty', 'fish'],
		title: "Floppy",
		wm: "awesomewm",
		images: ['./assets/dotfiles/Floppy/thumbnail.webp']
	},
	{
		author: "saimoomedits",
		description: "This an awesomewm rice/setup inspired by the infamous \"material you.\"",
		link: "https://github.com/saimoomedits/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/uo1pya/awesome_spent_way_too_long_on_this/?utm_source=share&utm_medium=web2x&context=3",
		tags: ['awesomewm', 'alacritty', 'wibar', 'mpd'],
		title: "M3 Dotfiles",
		wm: "awesomewm",
		images: ['./assets/dotfiles/M3_Dotfiles/thumbnail.png']
	},
	{
		author: "Vista1nik",
		description: "Neon80s for i3",
		link: "https://github.com/Vista1nik/i3-neon80s",
		reddit: "https://www.reddit.com/r/unixporn/comments/c0i8e1/i3gaps_neon_80s/?utm_source=share&utm_medium=web2x&context=3",
		tags: ['i3-gaps', 'kitty', 'i3blocks'],
		title: "Neon 80s",
		wm: "i3-gaps",
		images: ['./assets/dotfiles/Neon_80s/thumbnail.png']
	},
	{
		author: "owl4ce",
		description: "Aesthetic OpenboxWM Environment",
		link: "https://github.com/owl4ce/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/hlrpg7/openbox_bright_sky/",
		tags: ['openbox', 'tint2', 'obmenu-generator', 'rofi', 'dunst', 'urxvt'],
		title: "Bright Sky",
		wm: "openbox",
		images: ['./assets/dotfiles/Bright_Sky/thumbnail.webp']
	},
	{
		author: "Crylia",
		description: "An AwesomeWM theme inspired by everything I could find online and thought \"Hey that looks good!\".",
		link: "https://github.com/Crylia/crylia-theme",
		reddit: "https://www.reddit.com/r/unixporn/comments/u79yy4/awesome_something_ive_been_working_on_for_a_long/",
		tags: ['awesomewm', 'rofi', 'alacritty'],
		title: "Crylia Theme",
		wm: "awesomewm",
		images: ['./assets/dotfiles/Crylia_Theme/thumbnail.png']
	},
	{
		author: "ChocolateBread799",
		description: "Herbstluftwm?",
		link: "https://github.com/ChocolateBread799/macintosh",
		reddit: "https://www.reddit.com/r/unixporn/comments/nvnpco/herbstluftwm_herbstluftwm/",
		tags: ['herbstluftwm', 'eww'],
		title: "macintosh",
		wm: "herbstluftwm",
		images: ['./assets/dotfiles/macintosh/thumbnail.png']
	},
	{
		author: "Sukalaper",
		title: "Little girl",
		description: "Tiny setup i3wm on Arch Linux.",
		link: "https://github.com/sukalaper/dotfiles",
		tags: ['i3wm', 'windowmanager'],
		wm: "i3wm",
		images: ['./assets/dotfiles/sukalaper-dotfiles/thumbnail.png']
	},
	{
		author: "JinPots",
		description: "Some minimalistic theme for my i3 setup.",
		link: "https://github.com/JinPots/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/usyr5a/i3gaps_finally_done_my_minimalistic_rice_with/",
		tags: ['i3-gaps', 'polybar'],
		title: "JinPots\'s Dotfiles",
		wm: "i3-gaps",
		images: ['./assets/dotfiles/JinPotss_Dotfiles/thumbnail.png']
	},
	{
		author: "lokesh-krishna",
		description: "My dotfiles",
		link: "https://github.com/lokesh-krishna/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/12nah01/hyprland_beneath_the_surface/",
		tags: ['sway', 'zsh', 'waybar', 'wofi'],
		title: "lokesh-krishna\'s dotfiles",
		wm: "sway",
		images: ['./assets/dotfiles/lokesh-krishna_dotfiles/thumbnail.png', './assets/dotfiles/lokesh-krishna_dotfiles/1.png', './assets/dotfiles/lokesh-krishna_dotfiles/2.png', './assets/dotfiles/lokesh-krishna_dotfiles/3.png', './assets/dotfiles/lokesh-krishna_dotfiles/4.png', './assets/dotfiles/lokesh-krishna_dotfiles/5.png']
	},
	{
		author: "ParallaxWave",
		description: "Trying to escape the stereotypical i3wm desktop...",
		link: "https://github.com/ParallaxWave/blood_i3",
		reddit: "https://www.reddit.com/r/unixporn/comments/il5xjc/i3gaps_serene_dusk/",
		tags: ['i3-gaps', 'xfce4-terminal', 'dunst', 'rofi', 'up-clock', 'tint2'],
		title: "Serene Dusk",
		wm: "i3-gaps",
		images: ['./assets/dotfiles/Serene_Dusk/thumbnail.png']
	},
	{
		author: "manilarome",
		description: "Yes I copied the macOS Big Sur design. Many linux elitists will hate it but I don\'t care. Cry me a river.",
		link: "https://github.com/manilarome/the-glorious-dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/fhd70d/awesomewm_floppier/?utm_source=share&utm_medium=web2x&context=3",
		tags: ['awesomewm', 'rofi', 'kitty', 'fish'],
		title: "Surreal",
		wm: "awesomewm",
		images: ['./assets/dotfiles/Surreal/thumbnail.webp']
	},
	{
		author: "AFreidz",
		description: "Dotfiles for AwesomeWM on Linux setup",
		link: "https://github.com/afreidz/dots",
		reddit: "https://www.reddit.com/r/unixporn/comments/i09jf9/awesomewm_excuse_me_kind_sur/",
		tags: ['awesomewm', 'urxvt', 'rofi', 'zsh'],
		title: "AFreidz\'s Dotfiles",
		wm: "awesomewm",
		images: ['./assets/dotfiles/AFreidzs_Dotfiles/thumbnail.png']
	},
	{
		author: "Mofiqul",
		description: "This is a collection of awesome wm configuration files",
		link: "https://github.com/Mofiqul/awesome-shell",
		reddit: "https://www.reddit.com/r/unixporn/comments/mfryxp/awesome_just_learning_some_lua/",
		tags: ['awesomewm', 'i3lock-fancy', 'rofi'],
		title: "AwesomeShell",
		wm: "awesomewm",
		images: ['./assets/dotfiles/AwesomeShell/thumbnail.png']
	},
	{
		author: "elenapan",
		description: "an AwesomeWM rice which makes extensive use of the AwesomeWM Widget API",
		link: "https://github.com/elenapan/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/a900p7/awesome_mechanical_love/",
		tags: ['awesomewm', 'kitty', 'firefox', 'rofi'],
		title: "Elena\'s configuration files",
		wm: "awesomewm",
		images: ['./assets/dotfiles/Elenas_configuration_files/thumbnail.png']
	},
	{
		author: "nekonako",
		description: "Comfy home for linux user",
		link: "https://github.com/nekonako/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/dbmmjo/openbox_sweetness/",
		tags: ['openbox', 'conky', 'tint2'],
		title: "Sweetness",
		wm: "openbox",
		images: ['./assets/dotfiles/Sweetness/thumbnail.png']
	},
	{
		author: "Barbaross93",
		description: "Desktop setup",
		link: "https://github.com/Barbaross93/Nebula",
		reddit: "https://www.reddit.com/r/unixporn/comments/kzd6zt/qtile_genome/?utm_source=share&utm_medium=web2x&context=3",
		tags: ['qtile', 'alacritty', 'zsh', 'eww', 'dunst'],
		title: "Nebula",
		wm: "qtile",
		images: ['./assets/dotfiles/Nebula/thumbnail.png']
	},
	{
		author: "rxyhn",
		description: "Beautiful & Aesthetic AwesomeWM Configuration Files!",
		link: "https://github.com/rxyhn/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/ual8w7/awesome_aesthetic_beautiful_pastel/?utm_source=share&utm_medium=web2x&context=3",
		tags: ['awesomewm', 'alacritty', 'rofi', 'ncmpcpp'],
		title: "rxyhn\'s dotfiles",
		wm: "awesomewm",
		images: ['./assets/dotfiles/rxyhns_dotfiles/thumbnail.png']
	},
	{
		author: "Axarva",
		description: "XMonad. Widgets go brr.",
		link: "https://github.com/Axarva/dotfiles-2.0",
		reddit: "https://www.reddit.com/r/unixporn/comments/knv0r4/xmonad_youhavenoideawhatspossible_edition/?utm_source=share&utm_medium=web2x&context=3",
		tags: ['xmonad', 'eww', 'rofi', 'alacritty', 'tint2'],
		title: "Axarva\'s Dotfiles",
		wm: "xmonad",
		images: ['./assets/dotfiles/Axarvas_Dotfiles/thumbnail.png', './assets/dotfiles/Axarvas_Dotfiles/1.png', './assets/dotfiles/Axarvas_Dotfiles/2.png']
	},
	{
		author: "EvanKoe",
		description: "A nice rice for glassmorphism lovers !",
		link: "https://github.com/EvanKoe/dotfiles_2022.git",
		reddit: "https://www.reddit.com/r/unixporn/comments/tc3kd0/i3gaps_glassmorphism_here_i_come/",
		tags: ['i3-gaps', 'rofi', 'nvim', 'ranger', 'asm', 'arch'],
		title: "Evan\'s Glassmorphism",
		wm: "i3-gaps",
		images: ['./assets/dotfiles/Evans_Glassmorphism/thumbnail.png']
	},
	{
		author: "Stardust-kyun",
		description: "Comfy personal dotfiles 🌸",
		link: "https://github.com/stardust-kyun/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/vzdn6l/awesome_sakura/?utm_source=share&utm_medium=web2x&context=3",
		tags: ['awesomewm', 'st', 'nautilus', 'firefox'],
		title: "Sakura Dotfiles",
		wm: "awesomewm",
		images: ['./assets/dotfiles/Sakura_Dotfiles/thumbnail.png']
	}
]

export {dotfiles};