import React, { useState, useEffect } from 'react';
import s from './LandingPage.module.css';
import { useNavigate } from 'react-router-dom';


const Landing = () => {

   const history = useNavigate();

   function handleKeyPress(event) {
     if (event.key === 'Enter') {
      history('/home');
     }
   }

   const externalimage = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2a340938-3ed0-4ae4-8ef6-884f929e1d86/d8pf96l-9ae61a1e-2714-464c-b19f-a55eda088544.jpg/v1/fill/w_1600,h_2431,q_75,strp/cradily_by_bluekomadori_d8pf96l-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjQzMSIsInBhdGgiOiJcL2ZcLzJhMzQwOTM4LTNlZDAtNGFlNC04ZWY2LTg4NGY5MjllMWQ4NlwvZDhwZjk2bC05YWU2MWExZS0yNzE0LTQ2NGMtYjE5Zi1hNTVlZGEwODg1NDQuanBnIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.I01K9L09G9hwE0UEdY1i5cWQCGinGAk_kvTk00TdrtY';

   const externalimage2 = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2a340938-3ed0-4ae4-8ef6-884f929e1d86/d8pf4l2-3725ba4c-6257-49f2-9377-bc0cb0847b58.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJhMzQwOTM4LTNlZDAtNGFlNC04ZWY2LTg4NGY5MjllMWQ4NlwvZDhwZjRsMi0zNzI1YmE0Yy02MjU3LTQ5ZjItOTM3Ny1iYzBjYjA4NDdiNTguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.v_8n27x8YXXWWMrD_Eyrjp9jMfcJhoMGUT81ae0hbLo'
   
 
   const externalimage3='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2a340938-3ed0-4ae4-8ef6-884f929e1d86/d8skjeq-9328b9c9-5968-4aa7-91b2-232bf54eabbd.jpg/v1/fill/w_1280,h_1921,q_75,strp/leafeon_by_bluekomadori_d8skjeq-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMSIsInBhdGgiOiJcL2ZcLzJhMzQwOTM4LTNlZDAtNGFlNC04ZWY2LTg4NGY5MjllMWQ4NlwvZDhza2plcS05MzI4YjljOS01OTY4LTRhYTctOTFiMi0yMzJiZjU0ZWFiYmQuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.K3ZjhVh1CZdoxX3FEXAQTxjHAqNvjIok1wm7BCgc5VY'
 
   const externalimage4 = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2a340938-3ed0-4ae4-8ef6-884f929e1d86/d85laen-d529128b-7d3c-4208-8f0e-12c028d1627f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJhMzQwOTM4LTNlZDAtNGFlNC04ZWY2LTg4NGY5MjllMWQ4NlwvZDg1bGFlbi1kNTI5MTI4Yi03ZDNjLTQyMDgtOGYwZS0xMmMwMjhkMTYyN2YuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tpvFTjwwEOIg79Gj2sMrnmIXzXpaXKBOyVgWZwX1NQA'
 
   const externalimage5 = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2a340938-3ed0-4ae4-8ef6-884f929e1d86/d8pf85c-52345c04-ce13-40c1-958c-133bc793c194.jpg/v1/fill/w_1600,h_2431,q_75,strp/seviper_and_snivy_by_bluekomadori_d8pf85c-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjQzMSIsInBhdGgiOiJcL2ZcLzJhMzQwOTM4LTNlZDAtNGFlNC04ZWY2LTg4NGY5MjllMWQ4NlwvZDhwZjg1Yy01MjM0NWMwNC1jZTEzLTQwYzEtOTU4Yy0xMzNiYzc5M2MxOTQuanBnIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.nwksLoV7QNCG1VgTJqq7XxdCrbf7tPuVd4KLDCMovW8'
 
 
  const externalimageH = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2a340938-3ed0-4ae4-8ef6-884f929e1d86/dakym2a-9a95dc3b-d57b-4f12-a527-59f5ff60c0b3.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJhMzQwOTM4LTNlZDAtNGFlNC04ZWY2LTg4NGY5MjllMWQ4NlwvZGFreW0yYS05YTk1ZGMzYi1kNTdiLTRmMTItYTUyNy01OWY1ZmY2MGMwYjMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.tJhp5epe_muCa7Wt25__GZ7jfoWD6KTZuLDQoUQALZ4'
  const externalimageH2 = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2a340938-3ed0-4ae4-8ef6-884f929e1d86/d8pfbwl-0be04192-6a2e-4083-bb9d-d4a9bd1a3e60.jpg/v1/fill/w_1600,h_1067,q_75,strp/ninetales_by_bluekomadori_d8pfbwl-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA2NyIsInBhdGgiOiJcL2ZcLzJhMzQwOTM4LTNlZDAtNGFlNC04ZWY2LTg4NGY5MjllMWQ4NlwvZDhwZmJ3bC0wYmUwNDE5Mi02YTJlLTQwODMtYmI5ZC1kNGE5YmQxYTNlNjAuanBnIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.iGu8be9JhIiz3d1dXYBokYjVH3yCkhUlaQR32E6tWE4'
  const externalimageH3 = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2a340938-3ed0-4ae4-8ef6-884f929e1d86/d7ztqaw-f66f476b-9028-4401-9f63-af0f3a82e5b5.jpg/v1/fill/w_1600,h_1047,q_75,strp/mawile_and_sableye_by_bluekomadori_d7ztqaw-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA0NyIsInBhdGgiOiJcL2ZcLzJhMzQwOTM4LTNlZDAtNGFlNC04ZWY2LTg4NGY5MjllMWQ4NlwvZDd6dHFhdy1mNjZmNDc2Yi05MDI4LTQ0MDEtOWY2My1hZjBmM2E4MmU1YjUuanBnIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.5XtjI7GqcZcTV6vdkOkz80mp-LvFrvJcJSm-FJGd_8o'
  const  externalimageH4 = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2a340938-3ed0-4ae4-8ef6-884f929e1d86/d7jf5kt-c74a4acf-265c-4899-a6d5-c0a936436890.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJhMzQwOTM4LTNlZDAtNGFlNC04ZWY2LTg4NGY5MjllMWQ4NlwvZDdqZjVrdC1jNzRhNGFjZi0yNjVjLTQ4OTktYTZkNS1jMGE5MzY0MzY4OTAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.REJ9ccCXnZkyH4L64VvPoZtI0iG0yFih3TqZTiSJwmI'
  const externalimageH5 =  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2a340938-3ed0-4ae4-8ef6-884f929e1d86/d9kk4sn-e33adda8-cf8f-4f3a-bd38-b5bf635699a7.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJhMzQwOTM4LTNlZDAtNGFlNC04ZWY2LTg4NGY5MjllMWQ4NlwvZDlrazRzbi1lMzNhZGRhOC1jZjhmLTRmM2EtYmQzOC1iNWJmNjM1Njk5YTcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.loY5m_D5g9NjDtqXnWerba2G2j6GictmzaE4DTIW9dE'

  const [activePanel, setActivePanel] = useState(0);
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth, innerHeight } = window;
      setIsWide(innerWidth < innerHeight);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePanelClick = (index) => {
    setActivePanel(index);
  };

  const panels = [
    {
      index: 0,
      title: 'Explore the past',
      backgroundImage: externalimage,
      backgroundImageH: externalimageH,
    },
    {
      index: 1,
      title: 'Explore the forest',
      backgroundImage: externalimage2,
      backgroundImageH: externalimageH2,
    },
    {
      index: 2,
      title: 'Explore the nature',
      backgroundImage: externalimage3,
      backgroundImageH: externalimageH3,
    },
    {
      index: 3,
      title: 'Explore the magic',
      backgroundImage: externalimage4,
      backgroundImageH: externalimageH4,
    },
    {
      index: 4,
      title: 'Explore the night',
      backgroundImage: externalimage5,
      backgroundImageH: externalimageH5,
    },
  ];

  return (
    <div className={s.landing}>
      <div className={`${s.container} ${s.mycomponent}`}>
        {panels.map((panel) => {
          const backgroundImage = isWide
            ? panel.backgroundImage
            : panel.backgroundImageH;
          return (
            <div
              key={panel.index}
              className={`${s.panel} ${
                activePanel === panel.index ? s.active : ''
              }`}
              style={{
                backgroundImage: `url(${backgroundImage})`,
              }}
              onClick={() => handlePanelClick(panel.index)}
            >
            <h3 className={!isWide ? `` : ``}>{panel.title}</h3>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Landing;

