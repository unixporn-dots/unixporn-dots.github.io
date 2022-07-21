const dotfiles = [
	{
		author: "Crylia",
		description: "An AwesomeWM theme inspired by everything I could find online and thought \"Hey that looks good!\".",
		image: "themes/Crylia_Theme/crylia-theme.png",
		link: "https://github.com/Crylia/crylia-theme",
		reddit: "https://www.reddit.com/r/unixporn/comments/u79yy4/awesome_something_ive_been_working_on_for_a_long/",
		tags: ['awesomewm', 'rofi', 'alacritty'],
		title: "Crylia Theme",
		wm: "awesomewm"
	},
	{
		author: "leetApe",
		description: "Cozy Rainy Weather Rice ʕु•̫͡•ʔु",
		image: "themes/leetApes_dotfiles/leetApes-dotfiles.png",
		link: "https://github.com/leetApe/new-bspdots",
		reddit: "https://www.reddit.com/r/unixporn/comments/vf0cox/bspwm_ricing_while_its_raining_outside_is_so_chill/",
		tags: ['bspwm', 'alacritty', 'polybar', 'rofi'],
		title: "leetApe\'s dotfiles",
		wm: "bspwm"
	},
	{
		author: "Rashad-707",
		description: "A backup of my Linux setup",
		image: "themes/Rashad-707s_dotfiles/rashad-707s-dotfiles.png",
		link: "https://github.com/Rashad-707/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/pq8m5r/dwm_widgets_two_layout_do_you_like_light_theme/?utm_source=share&utm_medium=web2x&context=3",
		tags: ['dwm', 'kde', 'dunst', 'eww', 'polybar', 'rofi'],
		title: "Rashad-707\'s dotfiles",
		wm: "dwm"
	},
	{
		author: "3r3bu5x9",
		description: "A dark themed startpage and dark themes for Firefox and Linux inspired by Material design and Adapta.",
		image: "themes/Prismatic_Night/prismatic-night.png",
		link: "https://github.com/3r3bu5x9/prismatic-night",
		reddit: "https://www.reddit.com/r/unixporn/comments/gpqbfe/openbox_been_working_on_this_for_quite_some_time/",
		tags: ['openbox', 'urxvt', 'firefox', 'tint2', 'jgmenu'],
		title: "Prismatic Night",
		wm: "openbox"
	},
	{
		author: "Mofiqul",
		description: "This is a collection of awesome wm configuration files",
		image: "themes/AwesomeShell/awesomeshell.png",
		link: "https://github.com/Mofiqul/awesome-shell",
		reddit: "https://www.reddit.com/r/unixporn/comments/mfryxp/awesome_just_learning_some_lua/",
		tags: ['awesomewm', 'i3lock-fancy', 'rofi'],
		title: "AwesomeShell",
		wm: "awesomewm"
	},
	{
		author: "k-vernooy",
		description: "An organizational repository for my dotfiles and scripts",
		image: "themes/k-vernooys_dotfiles/k-vernooys-dotfiles.png",
		link: "https://github.com/k-vernooy/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/vw6pm0/i3gaps_fresh_summer_rice/",
		tags: ['i3-gaps', 'polybar', 'dunst', 'urxvt', 'rofi'],
		title: "k-vernooy\'s dotfiles",
		wm: "i3-gaps"
	},
	{
		author: "Miusaky",
		description: "Dotfiles for bspwm",
		image: "themes/SAGA_bspwm/SAGA_bspwm.png",
		link: "https://github.com/Miusaky/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/v95di4/bspwm_switched_to_arch/",
		tags: ['bspwm', 'SAGA'],
		title: "SAGA bspwm",
		wm: "bspwm"
	},
	{
		author: "ParallaxWave",
		description: "Trying to escape the stereotypical i3wm desktop...",
		image: "themes/Serene_Dusk/serene-dusk.png",
		link: "https://github.com/ParallaxWave/blood_i3",
		reddit: "https://www.reddit.com/r/unixporn/comments/il5xjc/i3gaps_serene_dusk/",
		tags: ['i3-gaps', 'xfce4-terminal', 'dunst', 'rofi', 'up-clock', 'tint2'],
		title: "Serene Dusk",
		wm: "i3-gaps"
	},
	{
		author: "owl4ce",
		description: "Aesthetic OpenboxWM Environment",
		image: "themes/Bright_Sky/bright-sky.webp",
		link: "https://github.com/owl4ce/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/hlrpg7/openbox_bright_sky/",
		tags: ['openbox', 'tint2', 'obmenu-generator', 'rofi', 'dunst', 'urxvt'],
		title: "Bright Sky",
		wm: "openbox"
	},
	{
		author: "ChocolateBread799",
		description: "Herbstluftwm?",
		image: "themes/macintosh/macintosh.png",
		link: "https://github.com/ChocolateBread799/macintosh",
		reddit: "https://www.reddit.com/r/unixporn/comments/nvnpco/herbstluftwm_herbstluftwm/",
		tags: ['herbstluftwm', 'eww'],
		title: "macintosh",
		wm: "herbstluftwm"
	},
	{
		author: "nekonako",
		description: "Comfy home for linux user",
		image: "themes/Sweetness/sweetness.png",
		link: "https://github.com/nekonako/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/dbmmjo/openbox_sweetness/",
		tags: ['openbox', 'conky', 'tint2'],
		title: "Sweetness",
		wm: "openbox"
	},
	{
		author: "Miusaky",
		description: "Dotfiles for dwm",
		image: "themes/SAGA_dwm/SAGA_dwm.png",
		link: "https://github.com/Miusaky/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/vuaga4/dwm_saga/",
		tags: ['dwm', 'SAGA'],
		title: "SAGA dwm",
		wm: "dwm"
	},
	{
		author: "ChocolateBread799",
		description: "My Awesomewm dotfiles",
		image: "themes/ChocolateBread799s_dotfiles/chocolatebread799s-dotfiles.png",
		link: "https://github.com/ChocolateBread799/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/td7ob3/awesomewm_its_not_an_apple_ad/?utm_source=share&utm_medium=web2x&context=3",
		tags: ['awesomewm', 'hilbish', 'wezterm'],
		title: "ChocolateBread799\'s dotfiles",
		wm: "awesomewm"
	},
	{
		author: "manilarome",
		description: "Floppy was meant to be a clone of the infamous Flurry Desktop. I named it Floppy because I thought it would flop when I first posted it on r/unixporn. This is my favorite.",
		image: "themes/Floppy/floppy.webp",
		link: "https://github.com/manilarome/the-glorious-dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/fhd70d/awesomewm_floppier/?utm_source=share&utm_medium=web2x&context=3",
		tags: ['awesomewm', 'rofi', 'kitty', 'fish'],
		title: "Floppy",
		wm: "awesomewm"
	},
	{
		author: "janleigh",
		description: "My desktop configuration files.",
		image: "themes/janleigh_dotfiles/janleigh-dotfiles.png",
		link: "https://github.com/janleigh/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/vlqhzb/bspwm_comfy_rocky_beach/",
		tags: ['bspwm', 'alacritty', 'zsh', 'eww', 'picom', 'dunst', 'thunar', 'rofi', 'firefox'],
		title: "janleigh\'s dotfiles",
		wm: "bspwm"
	},
	{
		author: "mahancoder",
		description: "A minimalistic classic rice",
		image: "themes/Mahancoders_dotfiles/mahancoder.png",
		link: "https://github.com/mahancoder/.dotfiles",
		tags: ['qtile', 'alacritty', 'ulauncher', 'deadd-notification-center', 'rounded-corners', 'dark', 'dracula', 'arch'],
		title: "Mahancoder\'s dotfiles",
		wm: "qtile"
	},
	{
		author: "manilarome",
		description: "Yes I copied the macOS Big Sur design. Many linux elitists will hate it but I don\'t care. Cry me a river.",
		image: "themes/Surreal/surreal.webp",
		link: "https://github.com/manilarome/the-glorious-dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/fhd70d/awesomewm_floppier/?utm_source=share&utm_medium=web2x&context=3",
		tags: ['awesomewm', 'rofi', 'kitty', 'fish'],
		title: "Surreal",
		wm: "awesomewm"
	},
	{
		author: "Vista1nik",
		description: "Neon80s for i3",
		image: "themes/Neon_80s/neon-80s.png",
		link: "https://github.com/Vista1nik/i3-neon80s",
		reddit: "https://www.reddit.com/r/unixporn/comments/c0i8e1/i3gaps_neon_80s/?utm_source=share&utm_medium=web2x&context=3",
		tags: ['i3-gaps', 'kitty', 'i3blocks'],
		title: "Neon 80s",
		wm: "i3-gaps"
	},
	{
		author: "beyond9thousand",
		description: "Opinionated BSPWM setup",
		image: "themes/b9ks_dotfiles/b9ks-dotfiles.png",
		link: "https://github.com/beyond9thousand/dotfiles",
		tags: ['bspwm', 'nvim', 'rofi', 'ranger', 'dunst', 'blender', 'dmenu', 'polybar', 'alacritty', 'tokyonight'],
		title: "b9k\'s dotfiles",
		wm: "bspwm"
	},
	{
		author: "Axarva",
		description: "XMonad. Widgets go brr.",
		image: "themes/Axarvas_Dotfiles/axarvas-dotfiles.png",
		link: "https://github.com/Axarva/dotfiles-2.0",
		reddit: "https://www.reddit.com/r/unixporn/comments/knv0r4/xmonad_youhavenoideawhatspossible_edition/?utm_source=share&utm_medium=web2x&context=3",
		tags: ['xmonad', 'eww', 'rofi', 'alacritty', 'tint2'],
		title: "Axarva\'s Dotfiles",
		wm: "xmonad"
	},
	{
		author: "ilham25",
		description: "Here is my aether dotfiles openbox version",
		image: "themes/Aether_Desktop/aether-desktop.png",
		link: "https://github.com/ilham25/dotfiles-openbox",
		reddit: "https://www.reddit.com/r/unixporn/comments/qy1you/openbox_aether_desktop/?utm_source=share&utm_medium=web2x&context=3",
		tags: ['openbox', 'urxvt', 'dunst', 'tint2', 'rofi'],
		title: "Aether Desktop",
		wm: "openbox"
	},
	{
		author: "Syndrizzle",
		description: "A collection of personal configuration files for various rices I have made.",
		image: "themes/Hotfiles/hotfiles.png",
		link: "https://github.com/Syndrizzle/hotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/vnexhe/bspwm_hotfiles_tokyo_night_inspired_by_rxyhns_rice/",
		tags: ['bspwm', 'kitty', 'eww', 'rofi', 'dunst', 'conky', 'slim', 'polybar', 'tokyonight'],
		title: "Hotfiles",
		wm: "bspwm"
	},
	{
		author: "elenapan",
		description: "an AwesomeWM rice which makes extensive use of the AwesomeWM Widget API",
		image: "themes/Elenas_configuration_files/mechanical-love.png",
		link: "https://github.com/elenapan/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/a900p7/awesome_mechanical_love/",
		tags: ['awesomewm', 'kitty', 'firefox', 'rofi'],
		title: "Elena\'s configuration files",
		wm: "awesomewm"
	},
	{
		author: "manilarome",
		description: "Yes GNawesOME is a weird name. GNawesOME was meant to be a GNOME clone. Instead it became a hybrid of macOS iOS GNOME and Deepin. I regret nothing.",
		image: "themes/GNawesoME/gnawesome.webp",
		link: "https://github.com/manilarome/the-glorious-dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/fhd70d/awesomewm_floppier/?utm_source=share&utm_medium=web2x&context=3",
		tags: ['awesomewm', 'rofi', 'kitty', 'fish'],
		title: "GNawesoME",
		wm: "awesomewm"
	},
	{
		author: "rxyhn",
		description: "Beautiful & Aesthetic AwesomeWM Configuration Files!",
		image: "themes/rxyhns_dotfiles/rxyhns-dotfiles.png",
		link: "https://github.com/rxyhn/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/ual8w7/awesome_aesthetic_beautiful_pastel/?utm_source=share&utm_medium=web2x&context=3",
		tags: ['awesomewm', 'alacritty', 'rofi', 'ncmpcpp'],
		title: "rxyhn\'s dotfiles",
		wm: "awesomewm"
	},
	{
		author: "Amog-OS",
		description: "A parody OS inspired by Among Us",
		image: "themes/AmogOS/AmogOS.webp",
		link: "https://github.com/Amog-OS/AmogOS",
		reddit: "https://www.reddit.com/r/unixporn/comments/nhomed/cinnamon_amogos_is_complete_icon_art_idea_by_u/?utm_source=share&utm_medium=web2x&context=3",
		tags: ['openbox', 'lxde', 'xfce4-panel'],
		title: "AmogOS",
		wm: "openbox"
	},
	{
		author: "EvanKoe",
		description: "A nice rice for glassmorphism lovers !",
		image: "themes/Evans_Glassmorphism/evankoe-glass.png",
		link: "https://github.com/EvanKoe/dotfiles_2022.git",
		reddit: "https://www.reddit.com/r/unixporn/comments/tc3kd0/i3gaps_glassmorphism_here_i_come/",
		tags: ['i3-gaps', 'rofi', 'nvim', 'ranger', 'asm', 'arch'],
		title: "Evan\'s Glassmorphism",
		wm: "i3-gaps"
	},
	{
		author: "saimoomedits",
		description: "This an awesomewm rice/setup inspired by the infamous \"material you.\"",
		image: "themes/M3_Dotfiles/m3-dotfiles.png",
		link: "https://github.com/saimoomedits/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/uo1pya/awesome_spent_way_too_long_on_this/?utm_source=share&utm_medium=web2x&context=3",
		tags: ['awesomewm', 'alacritty', 'wibar', 'mpd'],
		title: "M3 Dotfiles",
		wm: "awesomewm"
	},
	{
		author: "elenapan",
		description: "There is no place like ~/",
		image: "themes/Elenas_Dotfiles/elenas-dotfiles.png",
		link: "https://github.com/elenapan/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/hpakeu/awesome_afternoon_in_a_perfect_world/?utm_source=share&utm_medium=web2x&context=3",
		tags: ['awesomewm', 'zsh', 'kitty', 'rofi'],
		title: "Elena\'s Dotfiles",
		wm: "awesomewm"
	},
	{
		author: "SwiftyChicken",
		description: "My dotfiles",
		image: "themes/SwiftyChickens_dotfiles/swiftychickens-dotfiles.png",
		link: "https://github.com/SwiftyChicken/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/haogs0/bspwm_i_have_spent_too_much_time_on_this/",
		tags: ['bspwm', 'dunst', 'rofi', 'polybar', 'eww'],
		title: "SwiftyChicken\'s dotfiles",
		wm: "bspwm"
	},
	{
		author: "potamides",
		description: "My personal dotfiles for most of the programs I use on a daily basis.",
		image: "themes/Potamides_Dotfiles/potamides-dotfiles.png",
		link: "https://github.com/potamides/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/i60b10/awesome_streets_of_gruvbox/",
		tags: ['awesomewm', 'alacritty', 'conky'],
		title: "Potamides\' Dotfiles",
		wm: "awesomewm"
	},
	{
		author: "AFreidz",
		description: "Dotfiles for AwesomeWM on Linux setup",
		image: "themes/AFreidzs_Dotfiles/afreidzs-dotfiles.png",
		link: "https://github.com/afreidz/dots",
		reddit: "https://www.reddit.com/r/unixporn/comments/i09jf9/awesomewm_excuse_me_kind_sur/",
		tags: ['awesomewm', 'urxvt', 'rofi', 'zsh'],
		title: "AFreidz\'s Dotfiles",
		wm: "awesomewm"
	},
	{
		author: "b4skyx",
		description: "A low contrast setup for my colorblind eyes",
		image: "themes/Serenade/serenade.png",
		link: "https://github.com/b4skyx/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/lhljmi/bspwm_serenade_a_low_contrast_setup_for_my/",
		tags: ['bspwm', 'polybar', 'rofi', 'st'],
		title: "Serenade",
		wm: "bspwm"
	},
	{
		author: "manilarome",
		description: "A setup full of borders and lines. Awesome right?",
		image: "themes/Linear/linear.webp",
		link: "https://github.com/manilarome/the-glorious-dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/fhd70d/awesomewm_floppier/?utm_source=share&utm_medium=web2x&context=3",
		tags: ['awesomewm', 'rofi', 'kitty', 'fish'],
		title: "Linear",
		wm: "awesomewm"
	},
	{
		author: "Barbaross93",
		description: "Desktop setup",
		image: "themes/Nebula/nebula.png",
		link: "https://github.com/Barbaross93/Nebula",
		reddit: "https://www.reddit.com/r/unixporn/comments/kzd6zt/qtile_genome/?utm_source=share&utm_medium=web2x&context=3",
		tags: ['qtile', 'alacritty', 'zsh', 'eww', 'dunst'],
		title: "Nebula",
		wm: "qtile"
	},
	{
		author: "drahenprofi",
		description: "Arch Linux dotfiles",
		image: "themes/drahenprofis_dotfiles/drahenprofis-dotfiles.png",
		link: "https://github.com/drahenprofi/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/kucuzs/awesome_420_rice_it/",
		tags: ['awesomewm', 'rofi', 'kitty', 'sp'],
		title: "drahenprofi\'s dotfiles",
		wm: "awesomewm"
	},
	{
		author: "alba4k",
		description: "Just a random catppuccin rice",
		image: "themes/alba4ks_dotfiles/alba4k.png",
		link: "https://github.com/alba4k/.dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/vf2tej/i3gaps_well_i_like_purple_anybody_here_good_with/",
		tags: ['i3-gaps', 'polybar'],
		title: "alba4k\'s dotfiles",
		wm: "i3-gaps"
	},
	{
		author: "obliviousofcraps",
		description: "These are some of my ridiculously shit dotfiles that I use in my unproductive daily life.",
		image: "themes/mf-dots/mf-dots.png",
		link: "https://github.com/obliviousofcraps/mf-dots",
		reddit: "https://www.reddit.com/r/unixporn/comments/mioauy/openbox_eww_its_pastel/",
		tags: ['openbox', 'rofi', 'kitty', 'slim', 'eww', 'tint2', 'dunst'],
		title: "mf-dots",
		wm: "openbox"
	},
	{
		author: "fahimfaisal42",
		description: "My Arch Conf",
		image: "themes/fahimfaisal42s_dotfiles/fahimfaisal42s-dotfiles.png",
		link: "https://github.com/fahimfaisal42/.dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/uumk8j/bspwm_lost_in_the_oblivion/",
		tags: ['bspwm', 'dunst', 'kitty', 'polybar'],
		title: "fahimfaisal42\'s dotfiles",
		wm: "bspwm"
	},
	{
		author: "DebianOwO",
		description: "So if you\'re here you probably came from my unixporn rice. I tried my best to guide you through",
		image: "themes/Retro-Spectronum/retro-spectronum.png",
		link: "https://github.com/DebianOWO/Retro-Spectronum",
		reddit: "https://www.reddit.com/r/unixporn/comments/uve34a/polybar_i3gaps_my_first_arch_rice/",
		tags: ['i3-gaps', 'polybar', 'fish', 'alacritty'],
		title: "Retro-Spectronum",
		wm: "i3-gaps"
	},
	{
		author: "alba4k",
		description: "GG\' Integrated Developing & Living Environment",
		image: "themes/GGs_IDLE/ggidle-jul14-2022.png",
		link: "https://github.com/weebcyberpunk/ggidle",
		reddit: "https://www.reddit.com/r/unixporn/comments/vjdqkx/dwm_few_improvements_on_my_rice_removed_gaps_for/?utm_source=share&utm_medium=web2x&context=3",
		tags: ['dwm', 'neovim', 'mpd'],
		title: "GG\'s IDLE",
		wm: "dwm"
	},
	{
		author: "CodeHeister",
		description: "First rice for i3-gaps",
		image: "themes/CodeHeisters_Dotfiles/codeheisters-dotfiles.png",
		link: "https://github.com/CodeHeister/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/sjroxe/i3gaps_my_onedarknord_rice_after_a_month_what_do/?utm_source=share&utm_medium=web2x&context=3",
		tags: ['i3-gaps', 'rofi', 'nvim', 'ranger', 'dunst', 'flameshot'],
		title: "CodeHeister\'s Dotfiles",
		wm: "i3-gaps"
	},
	{
		author: "JinPots",
		description: "Some minimalistic theme for my i3 setup.",
		image: "themes/JinPotss_Dotfiles/jinpots-dotfiles.png",
		link: "https://github.com/JinPots/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/usyr5a/i3gaps_finally_done_my_minimalistic_rice_with/",
		tags: ['i3-gaps', 'polybar'],
		title: "JinPots\'s Dotfiles",
		wm: "i3-gaps"
	},
	{
		author: "LucyUwI",
		description: "My personal dotfiles for KDE",
		image: "themes/LucyUwIs_Dotfiles/lucyuwis-dotfiles.png",
		link: "https://github.com/LucyUwI/dotfiles",
		reddit: "https://www.reddit.com/r/unixporn/comments/pilgqs/kde_my_current_kde_setup/",
		tags: ['kde', 'kvantum', 'latte'],
		title: "LucyUwI\'s Dotfiles",
		wm: "kde"
	}
]

export {dotfiles};